import { Link } from 'react-router-dom'
import './Cenovnik.css'

const priceCategories = [
  {
    title: 'Fizioterapija i Masaže',
    icon: 'fas fa-heartbeat',
    items: [
      { name: 'Individualni fizioterapijski tretman', price: '3.000 RSD' },
      { name: 'Kineziterapija (terapijske vežbe)', price: '2.000 RSD' },
      { name: 'Manualna terapija', price: '3.500 RSD' },
      { name: 'Terapeutska i relaks masaža', price: '2.500 RSD' },
      { name: 'Hidžama (cupping terapija)', price: '3.000 RSD' },
      { name: 'Sportska rehabilitacija', price: '3.000 RSD' },
    ]
  },
  {
    title: 'Dečija rehabilitacija',
    icon: 'fas fa-child',
    items: [
      { name: 'Individualna procena deteta', price: '2.500 RSD' },
      { name: 'Korektivne vežbe (držanje i kičma)', price: '2.000 RSD' },
      { name: 'Vežbe za stopala i pravilan hod', price: '2.000 RSD' },
      { name: 'Senzomotorne vežbe kroz igru', price: '2.000 RSD' },
    ]
  },
  {
    title: 'Zdravlje i nega žene',
    icon: 'fas fa-female',
    items: [
      { name: 'Funkcionalni trening i kondicija', price: '2.500 RSD' },
      { name: 'Korekcija posture (leđa i vrat)', price: '2.500 RSD' },
      { name: 'Antistres i relaks masaža', price: '3.000 RSD' },
      { name: 'Hidžama za žene', price: '3.000 RSD' },
      { name: 'Program oblikovanja tela', price: '3.500 RSD' },
    ]
  }
]

export default function Cenovnik() {
  return (
    <main>
      <div style={{ height: '75px' }}></div>

      {/* INFO BANNER */}
      <div className="price-info-banner">
        <div className="container">
          <div className="info-banner-inner">
            <div className="info-banner-icon">
              <i className="fas fa-info-circle"></i>
            </div>
            <p>
              Navedene cene su okvirne. Tačna cena terapije određuje se nakon inicijalnog pregleda
              i zavisi od vrste i obima potrebne terapije. Za pakete i kombinovane terapije,
              kontaktirajte nas radi individualnog dogovora.
            </p>
          </div>
        </div>
      </div>

      {/* PRICE TABLES */}
      <section className="cenovnik-section section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Pregled cena</h2>
            <p>Transparentne cene naših usluga fizikalne terapije i rehabilitacije</p>
          </div>
          <div className="price-grid">
            {priceCategories.map((cat, i) => (
              <div className="price-card" key={i}>
                <div className="price-card-header">
                  <div className="price-card-icon">
                    <i className={cat.icon}></i>
                  </div>
                  <h3>{cat.title}</h3>
                </div>
                <div className="price-card-body">
                  {cat.items.map((item, j) => (
                    <div className="price-row" key={j}>
                      <span className="price-name">{item.name}</span>
                      <span className="price-amount">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="price-note-section">
        <div className="container">
          <div className="price-note-grid">
            <div className="price-note-item">
              <i className="fas fa-percent"></i>
              <div>
                <h4>Popusti na pakete</h4>
                <p>Kupovinom paketa od 10 sesija ostvarujete uštedinu do 20% u odnosu na pojedinačnu cenu.</p>
              </div>
            </div>
            <div className="price-note-item">
              <i className="fas fa-credit-card"></i>
              <div>
                <h4>Načini plaćanja</h4>
                <p>Prihvatamo gotovinski i bezgotovinski način plaćanja (karticama, mobilnim plaćanjem).</p>
              </div>
            </div>
            <div className="price-note-item">
              <i className="fas fa-file-invoice"></i>
              <div>
                <h4>Faktura i fiskalni račun</h4>
                <p>Izdajemo fisklani račun i fakturu za firme. Moguća refundacija troškova kroz zdravstveno osiguranje.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="price-cta">
        <div className="container price-cta-inner">
          <h2>Zakažite termin</h2>
          <p>Pozovite nas ili nam pišite – rado ćemo odgovoriti na sva Vaša pitanja</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+3810000000000" className="btn-primary">
              <i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i>
              +381 00 000 0000
            </a>
            <Link to="/kontakt" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.6)' }}>
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
