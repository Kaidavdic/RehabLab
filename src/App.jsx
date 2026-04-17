import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ONama from './pages/ONama'
import Usluge from './pages/Usluge'
import Cenovnik from './pages/Cenovnik'
import Kontakt from './pages/Kontakt'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import ScrollToTop from './components/ScrollToTop'

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/rehab-admin');
  
  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/usluge" element={<Usluge />} />
          <Route path="/cenovnik" element={<Cenovnik />} />
          <Route path="/kontakt" element={<Kontakt />} />
          
          {/* Admin Rute */}
          <Route path="/rehab-admin" element={<AdminLogin />} />
          <Route path="/rehab-admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
