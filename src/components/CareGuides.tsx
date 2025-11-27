import React from 'react'
import { Utensils, Droplets, Scissors, Stethoscope, Moon, Play } from 'lucide-react'

const CareGuides: React.FC = () => {
  const guides = [
    {
      icon: Utensils,
      title: 'FEEDING',
      description: 'Proper nutrition for growing puppies',
      color: '#FF005C',
      tips: ['3-4 meals daily', 'High-quality puppy food', 'Fresh water always']
    },
    {
      icon: Droplets,
      title: 'HYDRATION',
      description: 'Keep your puppy properly hydrated',
      color: '#00F0FF',
      tips: ['Clean water bowl', 'Check water levels', 'Monitor intake']
    },
    {
      icon: Scissors,
      title: 'GROOMING',
      description: 'Essential grooming routines',
      color: '#FF005C',
      tips: ['Weekly brushing', 'Nail trimming', 'Dental care']
    },
    {
      icon: Stethoscope,
      title: 'VET VISITS',
      description: 'Regular health checkups',
      color: '#00F0FF',
      tips: ['Vaccination schedule', 'Deworming', 'Health monitoring']
    },
    {
      icon: Moon,
      title: 'SLEEP',
      description: 'Proper rest and sleep habits',
      color: '#FF005C',
      tips: ['18-20 hours daily', 'Quiet sleep area', 'Consistent schedule']
    },
    {
      icon: Play,
      title: 'EXERCISE',
      description: 'Physical activity and play',
      color: '#00F0FF',
      tips: ['Short play sessions', 'Age-appropriate', 'Mental stimulation']
    }
  ]

  return (
    <section style={{
      backgroundColor: '#FFFFFF',
      padding: '80px 24px',
      border: '4px solid #000000',
      borderTop: 'none'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          marginBottom: '48px'
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#00F0FF',
            color: '#000000',
            padding: '8px 16px',
            border: '3px solid #000000',
            marginBottom: '16px',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '2px',
            boxShadow: '4px 4px 0 #FF005C'
          }}>
            ESSENTIAL GUIDES
          </div>
          
          <h2 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 700,
            color: '#000000',
            marginBottom: '16px',
            lineHeight: 1.1,
            letterSpacing: '-1px',
            textTransform: 'uppercase'
          }}>
            PUPPY CARE<br />BASICS
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {guides.map((guide, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                border: '4px solid #000000',
                padding: '32px',
                boxShadow: `8px 8px 0 ${guide.color}`,
                cursor: 'pointer',
                transition: 'transform 0.1s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-4px, -4px)'
                e.currentTarget.style.boxShadow = `12px 12px 0 ${guide.color}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)'
                e.currentTarget.style.boxShadow = `8px 8px 0 ${guide.color}`
              }}
            >
              <div style={{
                backgroundColor: guide.color,
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid #000000',
                marginBottom: '16px'
              }}>
                <guide.icon size={32} color="#000000" />
              </div>

              <h3 style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#000000',
                marginBottom: '8px',
                letterSpacing: '1px'
              }}>
                {guide.title}
              </h3>

              <p style={{
                fontSize: '16px',
                color: '#000000',
                marginBottom: '16px',
                fontWeight: 400
              }}>
                {guide.description}
              </p>

              <div style={{
                borderTop: '3px solid #000000',
                paddingTop: '16px'
              }}>
                {guide.tips.map((tip, tipIndex) => (
                  <div
                    key={tipIndex}
                    style={{
                      fontSize: '14px',
                      color: '#000000',
                      marginBottom: '8px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: guide.color,
                      border: '2px solid #000000'
                    }} />
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareGuides
