import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* O nama */}
          <div className="footer-col">
            <h3>RehabLab</h3>
            <p>
              Ambulanta za fizikalnu terapiju i rehabilitaciju u Novom Pazaru, pod vođstvom stručnog fizioterapeuta Darisa Šutkovića. Pružamo profesionalne usluge uz najsavremeniju opremu.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Brzi linkovi */}
          <div className="footer-col">
            <h3>Brzi linkovi</h3>
            <ul className="footer-links">
              <li><Link to="/"><i className="fas fa-chevron-right"></i> Početna</Link></li>
              <li><Link to="/o-nama"><i className="fas fa-chevron-right"></i> O nama</Link></li>
              <li><Link to="/usluge"><i className="fas fa-chevron-right"></i> Usluge</Link></li>
              <li><Link to="/cenovnik"><i className="fas fa-chevron-right"></i> Cenovnik</Link></li>
              <li><Link to="/kontakt"><i className="fas fa-chevron-right"></i> Kontakt</Link></li>
            </ul>
          </div>

          {/* Usluge */}
          <div className="footer-col">
            <h3>Naše usluge</h3>
            <ul className="footer-links">
              <li><Link to="/usluge"><i className="fas fa-chevron-right"></i> HILT Laser terapija</Link></li>
              <li><Link to="/usluge"><i className="fas fa-chevron-right"></i> Shockwave terapija</Link></li>
              <li><Link to="/usluge"><i className="fas fa-chevron-right"></i> Tekar terapija</Link></li>
              <li><Link to="/usluge"><i className="fas fa-chevron-right"></i> Kineziterapija</Link></li>
              <li><Link to="/usluge"><i className="fas fa-chevron-right"></i> Manuelna terapija</Link></li>
              <li><Link to="/usluge"><i className="fas fa-chevron-right"></i> Masaža</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="footer-col">
            <h3>Kontakt informacije</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Novi Pazar</span>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>+381 00 000 0000</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <span>+381 00 000 0000</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@rehablab.rs</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Pon – Pet: 08:00 – 20:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} RehabLab. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  )
}
