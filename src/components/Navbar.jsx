import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="RehabLab logo" />
          <span className="logo-text">REHABLAB</span>
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Početna</NavLink>
          <NavLink to="/o-nama" onClick={() => setMenuOpen(false)}>O nama</NavLink>
          <NavLink to="/usluge" onClick={() => setMenuOpen(false)}>Usluge</NavLink>
          <NavLink to="/cenovnik" onClick={() => setMenuOpen(false)}>Cenovnik</NavLink>
          <NavLink to="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</NavLink>
        </nav>
      </div>
    </header>
  )
}
