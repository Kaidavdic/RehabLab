import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.css'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      const data = await res.json()

      if (data.token) {
        localStorage.setItem('adminToken', data.token)
        navigate('/rehab-admin/dashboard')
      } else {
        setError(data.message || 'Pogrešni podaci')
      }
    } catch (err) {
      setError('Greška na serveru')
    }
    setLoading(false)
  }

  return (
    <div className="admin-container">
      <div className="login-box">
        <h2>RehabLab Admin</h2>
        <p>Unesite kredencijale za pristup panelu</p>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Korisničko ime</label>
            <input 
              type="text" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Lozinka</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Prijavljivanje...' : 'Prijavi se'}
          </button>
          {error && <div className="error-text">{error}</div>}
        </form>
      </div>
    </div>
  )
}
