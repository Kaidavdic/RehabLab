import { Link } from 'react-router-dom'
import './ONama.css'

const team = [
  {
    name: 'Daris Šutković',
    role: 'Strukovni fizioterapeut i osnivač',
    icon: 'fas fa-user-md'
  },
  {
    name: 'Fizioterapeut',
    role: 'Diplomirani fizioterapeut',
    icon: 'fas fa-user-md'
  },
  {
    name: 'Kineziterapeut',
    role: 'Diplomirani kineziterapeut',
    icon: 'fas fa-user-md'
  },
]

export default function ONama() {
  return (
    <main>
      {/* PAGE HERO REMOVED */}
      <div style={{ height: '75px' }}></div>

      {/* MAIN ABOUT */}
      <section className="about-main section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap">
              <div className="about-img-box">
                <div className="about-placeholder">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="about-badge">
                  <i className="fas fa-award"></i>
                  <span>Licencirana ambulanta</span>
                </div>
              </div>
            </div>
            <div className="about-text">
              <div className="section-subtitle">Ko smo mi</div>
              <h2>RehabLab – Vaš partner u rehabilitaciji</h2>
              <p>
                <strong>RehabLab</strong> je privatna ambulanta za fizikalnu terapiju i rehabilitaciju,
                smeštena u Novom Pazaru. Osnovan sa ciljem pružanja
                visokokvalitetne fizikalne terapije od strane fizioterapeuta Darisa Šutkovića, naš centar kontinuirano ulaže u najsavremeniju
                opremu i stručno usavršavanje.
              </p>
              <p>
                Naš pristup bazira se na individualnoj proceni svakog pacijenta, postavljanju precizne
                dijagnoze i kreiranju personalizovanog plana terapije. Verujemo da svaki pacijent
                zaslužuje pažnju, strpljenje i terapiju prilagođenu upravo njemu.
              </p>
              <p>
                Radimo sa pacijentima svih uzrasta – od profesionalnih sportista koji se oporavljaju
                od povreda, do penzionera koji žele da vrate pokretljivost i kvalitet života.
              </p>
              <div className="about-vals">
                <div className="val-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Stručnost</h4>
                    <p>Tim sa dugogodišnjim iskustvom i stalnim stručnim usavršavanjem</p>
                  </div>
                </div>
                <div className="val-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Savremena oprema</h4>
                    <p>HILT laser, Shockwave, Tekar i ostali vrhunski aparati</p>
                  </div>
                </div>
                <div className="val-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Topla atmosfera</h4>
                    <p>Prijatan ambijent koji olakšava oporavak i motiviše pacijente</p>
                  </div>
                </div>
              </div>
              <Link to="/kontakt" className="btn-primary">Zakažite pregled</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISIJA & VIZIJA */}
      <section className="mission-section section-padding">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon"><i className="fas fa-bullseye"></i></div>
              <h3>Naša misija</h3>
              <p>
                Pružiti svakom pacijentu najviši nivo fizikalne terapije i rehabilitacije,
                uz individualni pristup i najsavremenije metode lečenja, kako bi se što pre
                vratili aktivnom životu bez bola.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon"><i className="fas fa-eye"></i></div>
              <h3>Naša vizija</h3>
              <p>
                Biti prepoznatljiv centar fizikalne terapije u Novom Pazaru poznat po stručnosti,
                profesionalnosti i brizi o pacijentima, koji neprestano prati najnovija dostignuća
                u oblasti rehabilitacione medicine.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon"><i className="fas fa-star"></i></div>
              <h3>Naše vrednosti</h3>
              <p>
                Posvećenost pacijentu, stručnost, inovativnost i etičnost u radu – to su
                vrednosti koje vode naš tim svaki dan. Verujemo u transparentnost i izgradnju
                dugoročnog poverenja sa svakim pacijentom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIM */}
      <section className="team-section section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Naš tim</h2>
            <p>Iskusni stručnjaci posvećeni Vašem oporavku</p>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">
                  <i className={member.icon}></i>
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta-inner">
          <h2>Imate pitanje?</h2>
          <p>Kontaktirajte nas i naš tim će Vam odgovoriti u najkraćem roku</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+3810000000000" className="btn-primary">
              <i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i>
              Pozovite nas
            </a>
            <Link to="/kontakt" className="btn-outline">Pošaljite poruku</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
