import React from 'react'
import { Heart, Mail, Github, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#000000',
      color: '#FFFFFF',
      padding: '60px 24px 24px',
      border: '4px solid #000000',
      borderTop: '4px solid #00F0FF'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 700,
              marginBottom: '16px',
              letterSpacing: '2px',
              color: '#FF005C'
            }}>
              PUPPY//CARE
            </h3>
            <p style={{
              fontSize: '14px',
              lineHeight: 1.6,
              fontWeight: 400,
              color: '#FFFFFF'
            }}>
              YOUR COMPLETE GUIDE TO RAISING HAPPY, HEALTHY PUPPIES. NO NONSENSE. JUST FACTS.
            </p>
          </div>

          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: 700,
              marginBottom: '16px',
              letterSpacing: '1px',
              color: '#00F0FF'
            }}>
              QUICK LINKS
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {['CARE GUIDES', 'BREED DATABASE', 'TRAINING TIPS', 'HEALTH INFO'].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF005C'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: 700,
              marginBottom: '16px',
              letterSpacing: '1px',
              color: '#00F0FF'
            }}>
              CONNECT
            </h4>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              {[
                { icon: Mail, color: '#FF005C' },
                { icon: Github, color: '#00F0FF' },
                { icon: Twitter, color: '#FF005C' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    backgroundColor: '#FFFFFF',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #000000',
                    cursor: 'pointer',
                    transition: 'transform 0.1s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-2px, -2px)'
                    e.currentTarget.style.boxShadow = `4px 4px 0 ${social.color}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(0, 0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <social.icon size={24} color="#000000" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '3px solid #FFFFFF',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            MADE WITH <Heart size={16} color="#FF005C" fill="#FF005C" /> FOR PUPPIES
          </div>

          <div style={{
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '1px',
            color: '#00F0FF'
          }}>
            © 2024 PUPPY//CARE
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
