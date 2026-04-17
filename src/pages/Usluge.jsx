import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Usluge.css'

const services = [
  {
    id: 'opste',
    icon: 'fas fa-heartbeat',
    title: 'Naše usluge | RehabLab DŠ',
    shortDesc: 'Kompletna fizikalna terapija i rehabilitacija za sve uzraste.',
    items: [
      'Individualni fizioterapijski tretmani',
      'Rehabilitacija nakon povreda i operacija',
      'Terapija bola (leđa, vrat, zglobovi)',
      'Kineziterapija (terapijske vežbe)',
      'Sportska rehabilitacija',
      'Korektivne vežbe i posturalna korekcija',
      'Manualna terapija',
      'Masaže',
      'Hidžama (cupping terapija)',
      'Programi za jačanje i oporavak tela'
    ]
  },
  {
    id: 'deca',
    icon: 'fas fa-child',
    title: 'Briga o najmlađima',
    shortDesc: 'Specijalizovani programi za pravilan rast i razvoj dece.',
    items: [
      'Razvoj motorike kroz igru',
      'Vežbe za pravilno držanje tela',
      'Jačanje mišića i stabilnosti',
      'Vežbe za ravnotežu i koordinaciju',
      'Vežbe za stopala i pravilan hod',
      'Programi za pravilan rast i razvoj',
      'Podrška deci u razvoju',
      'Rad sa decom kojoj je potrebna dodatna podrška u razvoju',
      'Individualni fizioterapijski rad',
      'Prevencija problema sa kičmom',
      'Funkcionalno vežbanje kroz igru',
      'Individualna procena',
      'Senzorne vežbe i stimulacija'
    ]
  },
  {
    id: 'zene',
    icon: 'fas fa-female',
    title: 'Podrška zdravlju žene',
    shortDesc: 'Programi dizajnirani za specifične potrebe i izazove žena.',
    items: [
      'Smanjenje bola u leđima i vratu',
      'Korekcija i unapređenje posture',
      'Jačanje mišića i stabilnosti tela',
      'Poboljšanje pokretljivosti i fleksibilnosti',
      'Oblikovanje i zatezanje tela',
      'Jačanje stomaka, leđa i nogu',
      'Funkcionalni treninzi i kondicija',
      'Programi za aktivan život bez bola',
      'Programi za žene sa sedelačkim načinom života',
      'Relaks i antistres masaže',
      'Hidžama (prilagođena ženama)',
      'Individualno prilagođen pristup'
    ]
  }
]

export default function Usluge() {
  const [activeService, setActiveService] = useState(null)

  return (
    <main>
      <div style={{ height: '75px' }}></div>

      {/* INTRO */}
      <section className="usluge-intro section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Kompletna fizikalna terapija</h2>
            <p>
              Nudimo širok spektar savremenih metoda fizikalne terapije i rehabilitacije.
              Kliknite na uslugu za više detalja.
            </p>
          </div>
          <div className="usluge-grid">
            {services.map((s) => (
              <div
                className={`usluga-card ${activeService === s.id ? 'active' : ''}`}
                key={s.id}
                onClick={() => setActiveService(activeService === s.id ? null : s.id)}
              >
                <div className="usluga-header">
                  <div className="usluga-icon">
                    <i className={s.icon}></i>
                  </div>
                  <div className="usluga-title-wrap">
                    <h3>{s.title}</h3>
                    <p className="usluga-short">{s.shortDesc}</p>
                  </div>
                  <div className="usluga-toggle">
                    <i className={`fas fa-chevron-${activeService === s.id ? 'up' : 'down'}`}></i>
                  </div>
                </div>

                {activeService === s.id && (
                  <div className="usluga-detail">
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px' }}>
                      {s.items.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center' }}>
                          <i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
                          <span style={{ fontSize: '1.05rem', color: 'var(--text-color)' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/kontakt" className="btn-primary usluga-cta" style={{ marginTop: '24px', display: 'inline-block' }}>
                      Zakažite pregled
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="usluge-cta-section">
        <div className="container usluge-cta-inner">
          <div className="cta-icon"><i className="fas fa-calendar-check"></i></div>
          <h2>Niste sigurni koja terapija Vam odgovara?</h2>
          <p>Kontaktirajte nas i naš stručni tim će Vam preporučiti odgovarajuću terapiju</p>
          <div className="cta-btns">
            <a href="tel:+3810000000000" className="btn-primary">
              <i className="fas fa-phone-alt"></i> +381 00 000 0000
            </a>
            <Link to="/kontakt" className="btn-outline">Pošaljite upit</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
