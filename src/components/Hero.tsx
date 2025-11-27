import React from 'react'
import { Heart, Bone, Sparkles } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section style={{
      backgroundColor: '#FF005C',
      padding: '80px 24px',
      border: '4px solid #000000',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '100px',
        height: '100px',
        backgroundColor: '#00F0FF',
        border: '4px solid #000000',
        transform: 'rotate(15deg)'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '40px',
        width: '80px',
        height: '80px',
        backgroundColor: '#FFFFFF',
        border: '4px solid #000000',
        transform: 'rotate(-25deg)'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#000000',
          color: '#00F0FF',
          padding: '8px 16px',
          border: '3px solid #000000',
          marginBottom: '24px',
          fontSize: '14px',
          fontWeight: 600,
          letterSpacing: '2px',
          boxShadow: '6px 6px 0 #FFFFFF'
        }}>
          EST. 2024
        </div>

        <h1 style={{
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 700,
          color: '#FFFFFF',
          marginBottom: '24px',
          lineHeight: 1,
          letterSpacing: '-2px',
          textTransform: 'uppercase',
          textShadow: '6px 6px 0 #000000'
        }}>
          PUPPY<br />CARE<br />GUIDE
        </h1>

        <p style={{
          fontSize: '20px',
          color: '#000000',
          maxWidth: '600px',
          marginBottom: '40px',
          fontWeight: 600,
          backgroundColor: '#FFFFFF',
          padding: '16px',
          border: '3px solid #000000',
          boxShadow: '6px 6px 0 #000000'
        }}>
          EVERYTHING YOU NEED TO RAISE A HAPPY, HEALTHY PUPPY. NO FLUFF. JUST FACTS.
        </p>

        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <button style={{
            backgroundColor: '#00F0FF',
            color: '#000000',
            border: '4px solid #000000',
            padding: '16px 32px',
            fontSize: '18px',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'IBM Plex Mono, monospace',
            letterSpacing: '1px',
            boxShadow: '6px 6px 0 #000000',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Heart size={24} fill="#000000" />
            START LEARNING
          </button>

          <button style={{
            backgroundColor: '#FFFFFF',
            color: '#000000',
            border: '4px solid #000000',
            padding: '16px 32px',
            fontSize: '18px',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'IBM Plex Mono, monospace',
            letterSpacing: '1px',
            boxShadow: '6px 6px 0 #000000',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Bone size={24} />
            BREED GUIDE
          </button>
        </div>

        <div style={{
          marginTop: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {[
            { icon: Heart, label: 'CARE TIPS', count: '50+' },
            { icon: Bone, label: 'BREEDS', count: '100+' },
            { icon: Sparkles, label: 'TRAINING', count: '30+' }
          ].map((stat, index) => (
            <div key={index} style={{
              backgroundColor: '#000000',
              color: '#FFFFFF',
              padding: '24px',
              border: '4px solid #000000',
              boxShadow: '6px 6px 0 #00F0FF'
            }}>
              <stat.icon size={32} color="#FF005C" style={{ marginBottom: '8px' }} />
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#00F0FF' }}>
                {stat.count}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '1px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
