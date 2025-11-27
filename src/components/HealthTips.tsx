import React from 'react'
import { Syringe, Pill, Heart, AlertTriangle } from 'lucide-react'

const HealthTips: React.FC = () => {
  const healthTopics = [
    {
      icon: Syringe,
      title: 'VACCINATIONS',
      color: '#00F0FF',
      items: [
        { age: '6-8 WEEKS', vaccine: 'DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)' },
        { age: '10-12 WEEKS', vaccine: 'DHPP Booster + Leptospirosis' },
        { age: '14-16 WEEKS', vaccine: 'DHPP Final + Rabies' },
        { age: '1 YEAR', vaccine: 'Annual Boosters' }
      ]
    },
    {
      icon: Pill,
      title: 'PARASITE PREVENTION',
      color: '#FF005C',
      items: [
        { age: 'MONTHLY', vaccine: 'Heartworm Prevention' },
        { age: 'MONTHLY', vaccine: 'Flea & Tick Treatment' },
        { age: 'QUARTERLY', vaccine: 'Deworming' },
        { age: 'AS NEEDED', vaccine: 'Spot Treatments' }
      ]
    }
  ]

  const warningSignals = [
    'LOSS OF APPETITE',
    'LETHARGY',
    'VOMITING',
    'DIARRHEA',
    'COUGHING',
    'DIFFICULTY BREATHING',
    'EXCESSIVE SCRATCHING',
    'LIMPING'
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
            backgroundColor: '#FF005C',
            color: '#FFFFFF',
            padding: '8px 16px',
            border: '3px solid #000000',
            marginBottom: '16px',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '2px',
            boxShadow: '4px 4px 0 #00F0FF'
          }}>
            HEALTH & WELLNESS
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
            KEEP YOUR<br />PUPPY HEALTHY
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {healthTopics.map((topic, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                border: '4px solid #000000',
                padding: '32px',
                boxShadow: `8px 8px 0 ${topic.color}`
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{
                  backgroundColor: topic.color,
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px solid #000000'
                }}>
                  <topic.icon size={32} color="#000000" />
                </div>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '1px'
                }}>
                  {topic.title}
                </h3>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {topic.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    style={{
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      border: '3px solid #000000',
                      padding: '16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px'
                    }}
                  >
                    <div style={{
                      backgroundColor: topic.color,
                      color: '#000000',
                      padding: '4px 12px',
                      fontSize: '12px',
                      fontWeight: 700,
                      border: '2px solid #000000',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.age}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      flex: 1
                    }}>
                      {item.vaccine}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: '#FF005C',
          border: '4px solid #000000',
          padding: '40px',
          boxShadow: '8px 8px 0 #000000'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              backgroundColor: '#000000',
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid #000000'
            }}>
              <AlertTriangle size={32} color="#FF005C" />
            </div>
            <h3 style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '1px'
            }}>
              WARNING SIGNALS
            </h3>
          </div>

          <p style={{
            fontSize: '16px',
            color: '#FFFFFF',
            marginBottom: '24px',
            fontWeight: 600
          }}>
            CONTACT YOUR VET IMMEDIATELY IF YOU NOTICE:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {warningSignals.map((signal, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  border: '3px solid #000000',
                  padding: '16px',
                  fontSize: '14px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  boxShadow: '4px 4px 0 #000000'
                }}
              >
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: '40px',
          backgroundColor: '#00F0FF',
          border: '4px solid #000000',
          padding: '32px',
          boxShadow: '8px 8px 0 #FF005C',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <Heart size={48} color="#000000" fill="#FF005C" />
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h4 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#000000',
              marginBottom: '8px',
              letterSpacing: '1px'
            }}>
              EMERGENCY CONTACTS
            </h4>
            <p style={{
              fontSize: '16px',
              color: '#000000',
              fontWeight: 600
            }}>
              KEEP YOUR VET'S NUMBER AND NEAREST 24/7 EMERGENCY CLINIC INFO READILY AVAILABLE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HealthTips
