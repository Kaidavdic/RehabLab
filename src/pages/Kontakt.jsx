import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Kontakt.css'

export default function Kontakt() {
  const [form, setForm] = useState({ ime: '', prezime: '', email: '', telefon: '', poruka: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ ime: '', prezime: '', email: '', telefon: '', poruka: '' })
    }, 1200)
  }

  return (
    <main>
      <div style={{ height: '75px' }}></div>

      <section className="kontakt-section section-padding">
        <div className="container">
          <div className="kontakt-grid">
            {/* LEFT INFO */}
            <div className="kontakt-info">
              <div className="section-subtitle">Kontakt informacije</div>
              <h2>Kontaktirajte nas</h2>
              <p>
                Slobodno nas kontaktirajte putem telefona, e-maila ili nam pošaljite poruku
                putem kontakt forme. Naš tim će Vam odgovoriti u najkraćem roku.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-card-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4>Adresa</h4>
                    <p>Novi Pazar</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4>Telefon / Viber / WhatsApp</h4>
                    <p>
                      <a href="tel:+3810000000000">+381 00 000 0000</a><br />
                      <a href="tel:+3810000000000">+381 00 000 0000</a>
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4>E-mail</h4>
                    <p><a href="mailto:info@rehablab.rs">info@rehablab.rs</a></p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4>Radno vreme</h4>
                    <p>
                      Ponedeljak – Petak: 08:00 – 20:00<br />
                      Subota: po dogovoru<br />
                      Nedeljom: zatvoreno
                    </p>
                  </div>
                </div>
              </div>

              <div className="kontakt-social">
                <span>Pratite nas:</span>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="kontakt-form-wrap">
              <div className="form-card">
                <h3>Pošaljite nam poruku</h3>
                <p className="form-subtitle">Popunite formu i odgovorićemo Vam u roku od 24 sata</p>

                {sent ? (
                  <div className="success-msg">
                    <div className="success-icon"><i className="fas fa-check-circle"></i></div>
                    <h4>Poruka je uspešno poslata!</h4>
                    <p>Hvala Vam na poruci. Kontaktiraćemo Vas u najkraćem roku.</p>
                    <button className="btn-primary" onClick={() => setSent(false)}>
                      Pošalji novu poruku
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="kontakt-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="ime">Ime *</label>
                        <input
                          type="text"
                          id="ime"
                          name="ime"
                          value={form.ime}
                          onChange={handleChange}
                          placeholder="Vaše ime"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="prezime">Prezime *</label>
                        <input
                          type="text"
                          id="prezime"
                          name="prezime"
                          value={form.prezime}
                          onChange={handleChange}
                          placeholder="Vaše prezime"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">E-mail *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="vasa@email.com"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="telefon">Telefon</label>
                        <input
                          type="tel"
                          id="telefon"
                          name="telefon"
                          value={form.telefon}
                          onChange={handleChange}
                          placeholder="+381 6X XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="poruka">Poruka *</label>
                      <textarea
                        id="poruka"
                        name="poruka"
                        value={form.poruka}
                        onChange={handleChange}
                        placeholder="Napišite Vašu poruku, pitanje ili zahtev za zakazivanje..."
                        rows={6}
                        required
                      />
                    </div>

                    <button type="submit" className="btn-primary form-submit" disabled={loading}>
                      {loading ? (
                        <><i className="fas fa-spinner fa-spin"></i> Slanje...</>
                      ) : (
                        <><i className="fas fa-paper-plane"></i> Pošaljite poruku</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="kontakt-map">
        <iframe
          src="https://maps.google.com/maps?q=43.13868547246308,20.50429641742539&z=15&output=embed"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="RehabLab mapa"
        ></iframe>
      </section>
    </main>
  )
}
