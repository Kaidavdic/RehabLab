import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  {
    icon: 'fas fa-bolt',
    title: 'HILT Laser terapija',
    desc: 'Visoko intenzivna laser terapija koja deluje duboko u tkivo, ubrzava zarastanje i smanjuje bol i upalu.',
    link: '/usluge'
  },
  {
    icon: 'fas fa-wave-square',
    title: 'Shockwave terapija',
    desc: 'Terapija udarnim talasima koja efikasno tretira hronične boli, tendinopatije i kalcifikacije.',
    link: '/usluge'
  },
  {
    icon: 'fas fa-fire',
    title: 'Tekar terapija',
    desc: 'Tecarterapia stimuliše prirodne procese regeneracije tkiva kroz radiofrekvencijsku energiju.',
    link: '/usluge'
  },
  {
    icon: 'fas fa-running',
    title: 'Kineziterapija',
    desc: 'Individualni program vežbi za oporavak funkcije, snage i pokretljivosti uz stručno vođenje.',
    link: '/usluge'
  },
  {
    icon: 'fas fa-hands',
    title: 'Manuelna terapija',
    desc: 'Ručne tehnike mobilizacije i manipulacije zglobova i mekih tkiva za smanjenje bola.',
    link: '/usluge'
  },
  {
    icon: 'fas fa-spa',
    title: 'Masaža',
    desc: 'Terapeutska masaža za opuštanje mišića, poboljšanje cirkulacije i smanjenje napetosti.',
    link: '/usluge'
  },
]

const whyUs = [
  { icon: 'fas fa-user-md', title: 'Stručan tim', desc: 'Tim iskusnih fizioterapeuta sa dugogodišnjim iskustvom' },
  { icon: 'fas fa-microscope', title: 'Savremena oprema', desc: 'Najmodernija dijagnostička i terapeutska oprema' },
  { icon: 'fas fa-heart', title: 'Individualni pristup', desc: 'Svaki pacijent dobija personalizovani plan lečenja' },
  { icon: 'fas fa-shield-alt', title: 'Provereni rezultati', desc: 'Stotine zadovoljnih pacijenata i uspešnih terapija' },
]

const stats = [
  { number: '10+', label: 'Godina iskustva' },
  { number: '5000+', label: 'Zadovoljnih pacijenata' },
  { number: '15+', label: 'Vrsta terapija' },
  { number: '98%', label: 'Stopa zadovoljstva' },
]

export default function Home() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="hero-tagline">Ambulanta za fizikalnu terapiju i rehabilitaciju</p>
          <h1>Fizikalna terapija<br /><span>RehabLab</span></h1>
          <p className="hero-desc">
            Profesionalna fizikalna terapija i rehabilitacija sa najsavremenijim metodama lečenja.
            Vaš put ka zdravlju počinje ovde.
          </p>
          <div className="hero-buttons">
            <Link to="/kontakt" className="btn-primary">Zakažite pregled</Link>
            <Link to="/usluge" className="btn-hero-outline">Naše usluge</Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <h3>{s.number}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WELCOME */}
      <section className="welcome section-padding">
        <div className="container welcome-grid">
          <div className="welcome-image">
            <div className="welcome-img-inner">
              <div className="img-placeholder">
                <i className="fas fa-user-md"></i>
              </div>
              <div className="experience-badge">
                <span className="exp-num">10+</span>
                <span className="exp-label">Godina<br />iskustva</span>
              </div>
            </div>
          </div>
          <div className="welcome-text">
            <div className="section-subtitle">O nama</div>
            <h2>Dobrodošli u RehabLab</h2>
            <p>
              RehabLab je privatna ambulanta za fizikalnu terapiju i rehabilitaciju koja se nalazi 
              u Novom Pazaru. Naš tim stručnih fizioterapeuta, predvođen Darisom Šutkovićem, posvećen je pružanju 
              najkvalitetnije terapije i brige o svakom pacijentu.
            </p>
            <p>
              Koristimo najsavremenije metode i aparate za fizikalnu terapiju, uključujući HILT 
              laser, Shockwave, Tekar terapiju i mnoge druge, da bismo vam pomogli da se što 
              pre oporavite i vratite normalnom životu.
            </p>
            <div className="welcome-features">
              <div className="wf-item"><i className="fas fa-check-circle"></i> Licencirani fizioterapeuti</div>
              <div className="wf-item"><i className="fas fa-check-circle"></i> Savremena oprema</div>
              <div className="wf-item"><i className="fas fa-check-circle"></i> Individualni pristup</div>
              <div className="wf-item"><i className="fas fa-check-circle"></i> Brzo zakazivanje</div>
            </div>
            <Link to="/o-nama" className="btn-primary">Saznajte više</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Naše usluge</h2>
            <p>Nudimo širok spektar usluga fizikalne terapije i rehabilitacije prilagođenih vašim potrebama</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">
                  <i className={s.icon}></i>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={s.link} className="service-link">
                  Saznajte više <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Zašto izabrati nas?</h2>
            <p>Nudimo visokokvalitetnu fizikalnu terapiju uz individualni pristup svakom pacijentu</p>
          </div>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon"><i className={w.icon}></i></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container cta-inner">
          <div className="cta-text">
            <h2>Zakažite termin danas</h2>
            <p>Pozovite nas ili pošaljite upit — odgovaramo u najkraćem roku</p>
          </div>
          <div className="cta-buttons">
            <a href="tel:+3810000000000" className="btn-primary">
              <i className="fas fa-phone-alt"></i> +381 00 000 0000
            </a>
            <Link to="/kontakt" className="btn-cta-outline">Kontaktirajte nas</Link>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location-section section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Naša lokacija</h2>
            <p>Posetite nas u Novom Pazaru</p>
          </div>
          <div className="location-grid">
            <div className="location-info">
              <div className="loc-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Adresa</h4>
                  <p>Novi Pazar</p>
                </div>
              </div>
              <div className="loc-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h4>Telefon</h4>
                  <p>+381 00 000 0000<br />+381 00 000 0000</p>
                </div>
              </div>
              <div className="loc-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>info@rehablab.rs</p>
                </div>
              </div>
              <div className="loc-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Radno vreme</h4>
                  <p>Ponedeljak – Petak: 08:00 – 20:00<br />Subota: po dogovoru</p>
                </div>
              </div>
            </div>
            <div className="location-map">
              <iframe
                src="https://maps.google.com/maps?q=43.13868547246308,20.50429641742539&z=15&output=embed"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RehabLab lokacija"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
