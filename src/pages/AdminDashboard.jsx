import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.css'

export default function AdminDashboard() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      navigate('/rehab-admin')
      return
    }

    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/admin/messages', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        const data = await res.json()
        
        if (data.success) {
          setMessages(data.messages)
        } else {
          // Token istekao ili nevalidan
          localStorage.removeItem('adminToken')
          navigate('/rehab-admin')
        }
      } catch (err) {
        console.error("Greška pri učitavanju poruka")
      }
      setLoading(false)
    }

    fetchMessages()
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/rehab-admin')
  }

  const formatDate = (isoString) => {
    const date = new Date(isoString)
    return date.toLocaleDateString('sr-RS', { 
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    })
  }

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <h1>Pristigle Poruke</h1>
          <button onClick={handleLogout} className="logout-btn">
            <i className="fas fa-sign-out-alt"></i> Odjavi se
          </button>
        </div>

        <div className="messages-card">
          {loading ? (
            <div className="empty-state">
              <i className="fas fa-spinner fa-spin"></i>
              <p>Učitavanje poruka...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="empty-state">
              <i className="fas fa-inbox"></i>
              <p>Trenutno nema novih poruka.</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="messages-table">
                <thead>
                  <tr>
                    <th>Datum</th>
                    <th>Pacijent</th>
                    <th>Kontakt info</th>
                    <th>Poruka</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map(msg => (
                    <tr key={msg._id}>
                      <td className="msg-date">{formatDate(msg.createdAt)}</td>
                      <td className="msg-name">{msg.ime} {msg.prezime}</td>
                      <td className="msg-contact">
                        <div><i className="fas fa-envelope"></i> {msg.email}</div>
                        {msg.telefon && <div><i className="fas fa-phone"></i> {msg.telefon}</div>}
                      </td>
                      <td className="msg-text">{msg.poruka}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
