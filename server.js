import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rehablab', {
}).then(() => console.log('Povezano sa MongoDB'))
  .catch(err => console.error('Greška pri povezivanju na bazu:', err));

// Mongoose Model
const messageSchema = new mongoose.Schema({
  ime: String,
  prezime: String,
  email: String,
  telefon: String,
  poruka: String,
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

// Serve static files from the React app (Vite uses dist)
app.use(express.static(path.join(__dirname, 'dist')));

// --- API ROUTES ---

// 1. Ostavljanje poruke (Kontakt forma)
app.post('/api/contact', async (req, res) => {
  const { ime, prezime, email, telefon, poruka } = req.body;

  if (!ime || !prezime || !email || !poruka) {
    return res.status(400).json({ success: false, message: 'Nedostaju obavezni podaci.' });
  }

  try {
    // Sačuvaj u Bazu
    const newMessage = new Message({ ime, prezime, email, telefon, poruka });
    await newMessage.save();

    // Pošalji mejl (neobavezno, ali korisno kao notifikacija)
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        replyTo: email,
        subject: `Novi upit sa sajta: ${ime} ${prezime}`,
        text: `Poruka: ${poruka}\nKontakt: ${telefon}`,
      });
    } catch (mailError) {
      console.log('Poruka sačuvana, ali slanje emaila nije uspelo.', mailError);
    }

    res.status(200).json({ success: true, message: 'Email uspešno poslat i poruka sačuvana.' });
  } catch (error) {
    console.error('Greška pri snimanju:', error);
    res.status(500).json({ success: false, message: 'Došlo je do greške prilikom snimanja.' });
  }
});

// 2. Admin Login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    const token = jwt.sign({ admin: true }, process.env.JWT_SECRET || 'tajna-sifra-123', { expiresIn: '12h' });
    return res.json({ success: true, token });
  }
  
  res.status(401).json({ success: false, message: 'Pogrešno korisničko ime ili lozinka.' });
});

// Middleware za proveru Tokena
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(403).json({ success: false, message: 'Nedostaje token.' });
  
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET || 'tajna-sifra-123', (err, decoded) => {
    if (err) return res.status(401).json({ success: false, message: 'Token nije validan.' });
    next();
  });
};

// 3. Admin: Dohvati sve poruke
app.get('/api/admin/messages', verifyToken, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({ success: true, messages });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Greška pri učitavanju baze.' });
  }
});

// The "catchall" handler za SPA rutiranje
app.use((req, res, next) => {
  if (req.method === 'GET') {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Server pokrenut na portu ${PORT}`);
});
