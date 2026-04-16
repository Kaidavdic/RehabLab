import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Usluge.css'

const services = [
  {
    id: 'hilt',
    icon: 'fas fa-bolt',
    title: 'HILT Laser terapija',
    shortDesc: 'Visoko intenzivni laser koji deluje duboko u tkivo',
    fullDesc: [
      'HILT (High Intensity Laser Therapy) je savremena metoda fizikalne terapije koja koristi visoko intenzivni laserski zrak za lečenje raznih bolnih stanja mišićno-koštanog sistema.',
      'Laser prodire duboko u tkivo, stimulišući ćelijsku regeneraciju, smanjujući upalu i bol, i ubrzavajući zarastanje povređenih tkiva. Terapija je bezbolna i ne zahteva posebne pripreme.',
      'Indikacije: Artroze, diskus hernija, tendinopatije, sportske povrede, hronični bolovi u leđima i vratu, postoperativna rehabilitacija.'
    ],
    benefits: ['Brzo smanjenje bola', 'Duboko dejstvo na tkivo', 'Bez nuspojava', 'Kratke sesije']
  },
  {
    id: 'shockwave',
    icon: 'fas fa-wave-square',
    title: 'Shockwave terapija',
    shortDesc: 'Terapija udarnim talasima za hronične bolove',
    fullDesc: [
      'Shockwave (Radijalni udarni talasi) terapija je neinvazivna metoda lečenja hroničnih bolnih stanja primenom akustičnih talasa visoke energije.',
      'Talasi stimulišu proces zarastanja, razgrađuju kalcijumove depozite, poboljšavaju cirkulaciju i smanjuju bol. Posebno efektivna za stanja koja ne reaguju na klasičnu terapiju.',
      'Indikacije: Plantarni fasciitis, kalcifikacije tetiva, lateralni epikondilitis ("teniski lakat"), tendinopatija Ahilove tetive, sindrom karpalnog tunela.'
    ],
    benefits: ['Efikasna kod hroničnih stanja', 'Razgradnja kalcifikacija', 'Stimulacija regeneracije', 'Vidljivi rezultati']
  },
  {
    id: 'tekar',
    icon: 'fas fa-fire',
    title: 'Tekar terapija',
    shortDesc: 'Duboko zagrevanje tkiva radiofrekvencijom',
    fullDesc: [
      'Tekar terapija (Tecarterapia) je fizikalna metoda koja koristi radiofrekvencijsku energiju za zagrevanje tkiva i stimulaciju prirodnih mehanizama regeneracije.',
      'Postoje dva načina primene: kateforeza (deluje na kosti, zglobove, mišiće) i rezistivni mod (deluje na meka tkiva). Kombinacijom oba postiže se sveobuhvatno delovanje.',
      'Indikacije: Artroze, mišićni bolovi, sportske povrede, kontrakture, edemi, postoperativna rehabilitacija, bolovi u leđima.'
    ],
    benefits: ['Duboko zagrevanje', 'Brza cirkulacija', 'Smanjenje ukočenosti', 'Ubrzanje oporavka']
  },
  {
    id: 'kinezi',
    icon: 'fas fa-running',
    title: 'Kineziterapija',
    shortDesc: 'Individualni program terapeutskih vežbi',
    fullDesc: [
      'Kineziterapija je terapija pokretom – skup individualno prilagođenih vežbi koje imaju za cilj obnavljanje i poboljšanje funkcije mišića, zglobova i nervnog sistema.',
      'Program se kreira na osnovu detaljne procene i prilagođavaju se svakom pacijentu. Vežbe se sprovode pod stručnim nadzorom fizioterapeuta ili kineziterapeuta.',
      'Indikacije: Postoperativna rehabilitacija, neurološka oboljenja, mišićna slabost, bolovi u kičmi, sportska rehabilitacija, prevencija povreda.'
    ],
    benefits: ['Vežbe po meri', 'Stručno vođenje', 'Dugotrajan efekat', 'Prevencija povreda']
  },
  {
    id: 'manuelna',
    icon: 'fas fa-hands',
    title: 'Manuelna terapija',
    shortDesc: 'Ručne tehnike mobilizacije i manipulacije',
    fullDesc: [
      'Manuelna terapija obuhvata skup stručnih ručnih tehnika koje fizioterapeut primenjuje direktno na telu pacijenta, sa ciljem smanjenja bola i poboljšanja pokretljivosti.',
      'Uključuje tehnike mobilizacije zglobova, manipulacije, meka tkivne tehnike (miofascijalno otpuštanje, trigger point terapija) i neuralne mobilizacije.',
      'Indikacije: Bolovi u vratu i leđima, blokade zglobova, ograničena pokretljivost, glavobolje cervikalnog porekla, tenziona bol.'
    ],
    benefits: ['Trenutno olakšanje', 'Vraćanje pokretljivosti', 'Bez aparata', 'Precizne tehnike']
  },
  {
    id: 'masaza',
    icon: 'fas fa-spa',
    title: 'Masaža',
    shortDesc: 'Terapeutska i relaksaciona masaža tela',
    fullDesc: [
      'Terapeutska masaža je ručna tehnika kojom se deluje na meko tkivo tela – mišiće, fascije i vezivno tkivo – u cilju smanjenja napetosti, poboljšanja cirkulacije i otklanjanja bola.',
      'Nudimo klasičnu terapeutsku masažu, sportsku masažu, masažu leđa i vrata, limfnu drenažu i relaksacionu masažu celog tela.',
      'Indikacije: Mišićna napetost i bolovi, stres, loša cirkulacija, sportski oporavak, prevencija povreda, opšta relaksacija.'
    ],
    benefits: ['Opuštanje mišića', 'Bolja cirkulacija', 'Smanjenje stresa', 'Brz oporavak']
  },
  {
    id: 'ultrazvuk',
    icon: 'fas fa-broadcast-tower',
    title: 'Ultrazvuk terapija',
    shortDesc: 'Terapeutski ultrazvuk za zarastanje mekih tkiva',
    fullDesc: [
      'Terapeutski ultrazvuk koristi zvučne talase visoke frekvencije za prodiranje u duboka tkiva i stimulaciju procesa zarastanja.',
      'Deluje termički (zagrevanje tkiva) i mehanički (mikrovibracijom ćelija). Ubrzava zarastanje, smanjuje bol i poboljšava elastičnost tkiva.',
      'Indikacije: Tendinopatije, kapsulitis, mišićne kontrakture, sportske povrede, poremećaji zarastanja rana.'
    ],
    benefits: ['Duboko delovanje', 'Termički efekat', 'Ubrzano zarastanje', 'Smanjenje bola']
  },
  {
    id: 'elektro',
    icon: 'fas fa-plug',
    title: 'Elektroterapija',
    shortDesc: 'TENS, interferentne struje i elektrostimulacija',
    fullDesc: [
      'Elektroterapija obuhvata primenu različitih vrsta električne struje u terapeutske svrhe. Uključuje TENS (transcutaneous electrical nerve stimulation), interferentne struje, diadinamičke struje i elektrostimulaciju mišića.',
      'TENS deluje na smanjenje bola modulacijom nervnih signala, dok elektrostimulacija jača oslabljene mišiće i poboljšava funkciju.',
      'Indikacije: Hronični i akutni bolovi, mišićna atrofija, neurološka stanja, postoperativna terapija.'
    ],
    benefits: ['Bezbolna terapija', 'Jačanje mišića', 'Kontrola bola', 'Neurološka stimulacija']
  },
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
                    {s.fullDesc.map((par, i) => (
                      <p key={i}>{par}</p>
                    ))}
                    <div className="usluga-benefits">
                      {s.benefits.map((b, i) => (
                        <span className="benefit-tag" key={i}>
                          <i className="fas fa-check"></i> {b}
                        </span>
                      ))}
                    </div>
                    <Link to="/kontakt" className="btn-primary usluga-cta">
                      Zakažite terapiju
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
