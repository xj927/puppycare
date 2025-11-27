import React, { useState } from 'react'
import { X, Mail, Lock, User, AlertCircle } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const { signUp, signIn } = useAuth()

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    setLoading(true)

    if (isSignUp && password !== confirmPassword) {
      setError('PASSWORDS DO NOT MATCH')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('PASSWORD MUST BE AT LEAST 6 CHARACTERS')
      setLoading(false)
      return
    }

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password)
        if (error) {
          setError(error.message.toUpperCase())
        } else {
          setSuccess(true)
          setTimeout(() => {
            onClose()
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setSuccess(false)
          }, 2000)
        }
      } else {
        const { error } = await signIn(email, password)
        if (error) {
          setError(error.message.toUpperCase())
        } else {
          onClose()
          setEmail('')
          setPassword('')
        }
      }
    } catch (err: any) {
      setError(err.message.toUpperCase())
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '24px'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '4px solid #000000',
        boxShadow: '12px 12px 0 #FF005C',
        maxWidth: '500px',
        width: '100%',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: '#FF005C',
            border: '3px solid #000000',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '4px 4px 0 #000000'
          }}
        >
          <X size={24} color="#FFFFFF" />
        </button>

        <div style={{
          backgroundColor: '#000000',
          color: '#00F0FF',
          padding: '24px',
          borderBottom: '4px solid #000000'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            letterSpacing: '2px',
            margin: 0
          }}>
            {isSignUp ? 'SIGN UP' : 'LOGIN'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: '32px' }}>
          {error && (
            <div style={{
              backgroundColor: '#FF005C',
              color: '#FFFFFF',
              border: '3px solid #000000',
              padding: '16px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '4px 4px 0 #000000'
            }}>
              <AlertCircle size={24} />
              <span style={{ fontSize: '14px', fontWeight: 600 }}>{error}</span>
            </div>
          )}

          {success && (
            <div style={{
              backgroundColor: '#00F0FF',
              color: '#000000',
              border: '3px solid #000000',
              padding: '16px',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: 700,
              boxShadow: '4px 4px 0 #000000'
            }}>
              {isSignUp ? 'ACCOUNT CREATED! REDIRECTING...' : 'LOGIN SUCCESSFUL!'}
            </div>
          )}

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 700,
              marginBottom: '8px',
              letterSpacing: '1px'
            }}>
              EMAIL
            </label>
            <div style={{ position: 'relative' }}>
              <Mail
                size={20}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#000000'
                }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '16px 16px 16px 48px',
                  border: '3px solid #000000',
                  fontSize: '16px',
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontWeight: 600,
                  backgroundColor: '#FFFFFF',
                  boxShadow: '4px 4px 0 #00F0FF'
                }}
                placeholder="YOUR@EMAIL.COM"
              />
            </div>
          </div>

          <div style={{ marginBottom: isSignUp ? '24px' : '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 700,
              marginBottom: '8px',
              letterSpacing: '1px'
            }}>
              PASSWORD
            </label>
            <div style={{ position: 'relative' }}>
              <Lock
                size={20}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#000000'
                }}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '16px 16px 16px 48px',
                  border: '3px solid #000000',
                  fontSize: '16px',
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontWeight: 600,
                  backgroundColor: '#FFFFFF',
                  boxShadow: '4px 4px 0 #00F0FF'
                }}
                placeholder="••••••••"
              />
            </div>
          </div>

          {isSignUp && (
            <div style={{ marginBottom: '32px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 700,
                marginBottom: '8px',
                letterSpacing: '1px'
              }}>
                CONFIRM PASSWORD
              </label>
              <div style={{ position: 'relative' }}>
                <Lock
                  size={20}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#000000'
                  }}
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '16px 16px 16px 48px',
                    border: '3px solid #000000',
                    fontSize: '16px',
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontWeight: 600,
                    backgroundColor: '#FFFFFF',
                    boxShadow: '4px 4px 0 #00F0FF'
                  }}
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              backgroundColor: loading ? '#666666' : '#FF005C',
              color: '#FFFFFF',
              border: '4px solid #000000',
              padding: '16px',
              fontSize: '18px',
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'IBM Plex Mono, monospace',
              letterSpacing: '2px',
              boxShadow: '6px 6px 0 #000000',
              marginBottom: '16px'
            }}
          >
            {loading ? 'PROCESSING...' : (isSignUp ? 'CREATE ACCOUNT' : 'LOGIN')}
          </button>

          <div style={{
            textAlign: 'center',
            paddingTop: '16px',
            borderTop: '3px solid #000000'
          }}>
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp)
                setError('')
                setSuccess(false)
              }}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#000000',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'IBM Plex Mono, monospace',
                letterSpacing: '1px',
                textDecoration: 'underline'
              }}
            >
              {isSignUp ? 'ALREADY HAVE AN ACCOUNT? LOGIN' : 'NEED AN ACCOUNT? SIGN UP'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthModal
