import React from 'react'
import { Menu, X, LogIn, LogOut, User } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
  onAuthClick: () => void
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, onAuthClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { user, signOut } = useAuth()

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'care', label: 'CARE' },
    { id: 'breeds', label: 'BREEDS' },
    { id: 'training', label: 'TRAINING' },
    { id: 'health', label: 'HEALTH' }
  ]

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header style={{
      backgroundColor: '#000000',
      color: '#FFFFFF',
      padding: '16px 24px',
      border: '4px solid #000000',
      borderTop: 'none',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 6px 0 #FF005C'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 700,
          letterSpacing: '2px'
        }}>
          PUPPY//CARE
        </div>

        <nav style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'flex' } }}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                style={{
                  backgroundColor: activeSection === item.id ? '#FF005C' : 'transparent',
                  color: '#FFFFFF',
                  border: '3px solid #FFFFFF',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'IBM Plex Mono, monospace',
                  letterSpacing: '1px',
                  marginLeft: '8px',
                  boxShadow: activeSection === item.id ? '4px 4px 0 #00F0FF' : 'none',
                  transition: 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.backgroundColor = '#00F0FF'
                    e.currentTarget.style.color = '#000000'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#FFFFFF'
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '8px' }}>
              <div style={{
                backgroundColor: '#00F0FF',
                color: '#000000',
                border: '3px solid #FFFFFF',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <User size={16} />
                {user.email?.split('@')[0].toUpperCase()}
              </div>
              <button
                onClick={handleSignOut}
                style={{
                  backgroundColor: '#FF005C',
                  color: '#FFFFFF',
                  border: '3px solid #FFFFFF',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'IBM Plex Mono, monospace',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '4px 4px 0 #00F0FF'
                }}
              >
                <LogOut size={16} />
                LOGOUT
              </button>
            </div>
          ) : (
            <button
              onClick={onAuthClick}
              style={{
                backgroundColor: '#00F0FF',
                color: '#000000',
                border: '3px solid #FFFFFF',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'IBM Plex Mono, monospace',
                letterSpacing: '1px',
                marginLeft: '8px',
                boxShadow: '4px 4px 0 #FF005C',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <LogIn size={16} />
              LOGIN
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              backgroundColor: '#FF005C',
              border: '3px solid #FFFFFF',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '8px'
            }}
          >
            {mobileMenuOpen ? <X size={24} color="#FFFFFF" /> : <Menu size={24} color="#FFFFFF" />}
          </button>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#000000',
          border: '3px solid #FFFFFF',
          marginTop: '16px',
          padding: '16px'
        }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id)
                setMobileMenuOpen(false)
              }}
              style={{
                backgroundColor: activeSection === item.id ? '#FF005C' : '#FFFFFF',
                color: activeSection === item.id ? '#FFFFFF' : '#000000',
                border: '3px solid #000000',
                padding: '12px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'IBM Plex Mono, monospace',
                width: '100%',
                marginBottom: '8px',
                textAlign: 'left',
                boxShadow: '4px 4px 0 #00F0FF'
              }}
            >
              {item.label}
            </button>
          ))}
          
          {user ? (
            <>
              <div style={{
                backgroundColor: '#00F0FF',
                color: '#000000',
                border: '3px solid #000000',
                padding: '12px',
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '8px',
                boxShadow: '4px 4px 0 #FF005C'
              }}>
                <User size={16} style={{ display: 'inline', marginRight: '8px' }} />
                {user.email?.split('@')[0].toUpperCase()}
              </div>
              <button
                onClick={() => {
                  handleSignOut()
                  setMobileMenuOpen(false)
                }}
                style={{
                  backgroundColor: '#FF005C',
                  color: '#FFFFFF',
                  border: '3px solid #000000',
                  padding: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'IBM Plex Mono, monospace',
                  width: '100%',
                  textAlign: 'left',
                  boxShadow: '4px 4px 0 #000000'
                }}
              >
                <LogOut size={16} style={{ display: 'inline', marginRight: '8px' }} />
                LOGOUT
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                onAuthClick()
                setMobileMenuOpen(false)
              }}
              style={{
                backgroundColor: '#00F0FF',
                color: '#000000',
                border: '3px solid #000000',
                padding: '12px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'IBM Plex Mono, monospace',
                width: '100%',
                textAlign: 'left',
                boxShadow: '4px 4px 0 #FF005C'
              }}
            >
              <LogIn size={16} style={{ display: 'inline', marginRight: '8px' }} />
              LOGIN
            </button>
          )}
        </div>
      )}
    </header>
  )
}

export default Header
