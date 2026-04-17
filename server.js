import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app (Vite uses dist)
app.use(express.static(path.join(__dirname, 'dist')));

// Email API route
app.post('/api/contact', async (req, res) => {
  const { ime, prezime, email, telefon, poruka } = req.body;

  if (!ime || !prezime || !email || !poruka) {
    return res.status(400).json({ success: false, message: 'Nedostaju obavezni podaci.' });
  }

  // Create transporter (Configured for Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // App Password for Gmail
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER, // Send to yourself
    replyTo: email, // Reply directly to the user
    subject: `Novi upit sa sajta: ${ime} ${prezime}`,
    text: `
Ime i prezime: ${ime} ${prezime}
Email: ${email}
Telefon: ${telefon || 'Nije unet'}

Poruka:
${poruka}
    `,
    html: `
      <h3>Novi upit sa sajta RehabLab</h3>
      <p><strong>Ime i prezime:</strong> ${ime} ${prezime}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${telefon || 'Nije unet'}</p>
      <p><strong>Poruka:</strong></p>
      <p>${poruka}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email uspešno poslat.' });
  } catch (error) {
    console.error('Greška pri slanju mejla:', error);
    res.status(500).json({ success: false, message: 'Došlo je do greške prilikom slanja emaila.' });
  }
});

// The "catchall" handler: for any request that doesn't match an API route, send back React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server pokrenut na portu ${PORT}`);
});
