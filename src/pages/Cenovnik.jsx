import { Link } from 'react-router-dom'
import './Cenovnik.css'

const priceCategories = [
  {
    title: 'Laser terapija',
    icon: 'fas fa-bolt',
    items: [
      { name: 'HILT Laser – jedna sesija', price: '2.500 RSD' },
      { name: 'HILT Laser – 5 sesija', price: '11.000 RSD' },
      { name: 'HILT Laser – 10 sesija', price: '20.000 RSD' },
    ]
  },
  {
    title: 'Shockwave terapija',
    icon: 'fas fa-wave-square',
    items: [
      { name: 'Shockwave – jedna sesija', price: '3.000 RSD' },
      { name: 'Shockwave – 5 sesija', price: '13.000 RSD' },
      { name: 'Shockwave – 10 sesija', price: '25.000 RSD' },
    ]
  },
  {
    title: 'Tekar terapija',
    icon: 'fas fa-fire',
    items: [
      { name: 'Tekar – jedna sesija', price: '2.000 RSD' },
      { name: 'Tekar – 5 sesija', price: '9.000 RSD' },
      { name: 'Tekar – 10 sesija', price: '17.000 RSD' },
    ]
  },
  {
    title: 'Kineziterapija',
    icon: 'fas fa-running',
    items: [
      { name: 'Individualna kineziterapija – 45 min', price: '2.000 RSD' },
      { name: 'Individualna kineziterapija – 10 sesija', price: '18.000 RSD' },
      { name: 'Grupna kineziterapija – 45 min', price: '1.200 RSD' },
    ]
  },
  {
    title: 'Manuelna terapija',
    icon: 'fas fa-hands',
    items: [
      { name: 'Manuelna terapija – 30 min', price: '2.500 RSD' },
      { name: 'Manuelna terapija – 60 min', price: '4.000 RSD' },
      { name: 'Manuelna terapija – 5 sesija', price: '11.500 RSD' },
    ]
  },
  {
    title: 'Masaža',
    icon: 'fas fa-spa',
    items: [
      { name: 'Masaža leđa – 30 min', price: '2.000 RSD' },
      { name: 'Masaža celog tela – 60 min', price: '3.500 RSD' },
      { name: 'Sportska masaža – 45 min', price: '2.800 RSD' },
      { name: 'Relaksaciona masaža – 60 min', price: '3.000 RSD' },
    ]
  },
  {
    title: 'Elektroterapija i ultrazvuk',
    icon: 'fas fa-plug',
    items: [
      { name: 'TENS terapija', price: '800 RSD' },
      { name: 'Ultrazvuk terapija', price: '800 RSD' },
      { name: 'Interferentne struje', price: '800 RSD' },
      { name: 'Kombinovana elektroterapija', price: '1.200 RSD' },
    ]
  },
  {
    title: 'Pregledi i konsultacije',
    icon: 'fas fa-user-md',
    items: [
      { name: 'Inicijalni pregled i procena', price: '2.000 RSD' },
      { name: 'Kontrolni pregled', price: '1.000 RSD' },
      { name: 'Konsultacija sa fizijatrom', price: '2.500 RSD' },
    ]
  },
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
