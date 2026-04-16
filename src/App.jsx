import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ONama from './pages/ONama'
import Usluge from './pages/Usluge'
import Cenovnik from './pages/Cenovnik'
import Kontakt from './pages/Kontakt'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/usluge" element={<Usluge />} />
        <Route path="/cenovnik" element={<Cenovnik />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
