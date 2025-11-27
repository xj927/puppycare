import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const BreedSelector: React.FC = () => {
  const [selectedBreed, setSelectedBreed] = useState(0)

  const breeds = [
    {
      name: 'GOLDEN RETRIEVER',
      size: 'LARGE',
      energy: 'HIGH',
      care: 'MODERATE',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      traits: ['FRIENDLY', 'INTELLIGENT', 'DEVOTED'],
      description: 'Perfect family dog with gentle temperament'
    },
    {
      name: 'FRENCH BULLDOG',
      size: 'SMALL',
      energy: 'MODERATE',
      care: 'LOW',
      image: 'https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg',
      traits: ['PLAYFUL', 'ADAPTABLE', 'ALERT'],
      description: 'Great for apartments and city living'
    },
    {
      name: 'GERMAN SHEPHERD',
      size: 'LARGE',
      energy: 'HIGH',
      care: 'HIGH',
      image: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg',
      traits: ['LOYAL', 'CONFIDENT', 'COURAGEOUS'],
      description: 'Excellent working and protection dog'
    },
    {
      name: 'LABRADOR',
      size: 'LARGE',
      energy: 'HIGH',
      care: 'MODERATE',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
      traits: ['OUTGOING', 'EVEN-TEMPERED', 'GENTLE'],
      description: 'Most popular family companion breed'
    },
    {
      name: 'BEAGLE',
      size: 'MEDIUM',
      energy: 'HIGH',
      care: 'LOW',
      image: 'https://images.pexels.com/photos/1612847/pexels-photo-1612847.jpeg',
      traits: ['CURIOUS', 'FRIENDLY', 'MERRY'],
      description: 'Excellent with children and other pets'
    },
    {
      name: 'POODLE',
      size: 'MEDIUM',
      energy: 'MODERATE',
      care: 'HIGH',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg',
      traits: ['INTELLIGENT', 'ACTIVE', 'ELEGANT'],
      description: 'Hypoallergenic and highly trainable'
    }
  ]

  return (
    <section style={{
      backgroundColor: '#00F0FF',
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
            boxShadow: '4px 4px 0 #000000'
          }}>
            BREED DATABASE
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
            FIND YOUR<br />PERFECT MATCH
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: '40px'
        }}>
          {breeds.map((breed, index) => (
            <button
              key={index}
              onClick={() => setSelectedBreed(index)}
              style={{
                backgroundColor: selectedBreed === index ? '#FF005C' : '#FFFFFF',
                color: selectedBreed === index ? '#FFFFFF' : '#000000',
                border: '4px solid #000000',
                padding: '16px',
                fontSize: '18px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'IBM Plex Mono, monospace',
                letterSpacing: '1px',
                textAlign: 'left',
                boxShadow: selectedBreed === index ? '6px 6px 0 #000000' : '4px 4px 0 #000000',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {breed.name}
              <ChevronRight size={24} />
            </button>
          ))}
        </div>

        <div style={{
          backgroundColor: '#FFFFFF',
          border: '4px solid #000000',
          boxShadow: '8px 8px 0 #FF005C',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 0
          }}>
            <div style={{
              position: 'relative',
              minHeight: '400px',
              border: '4px solid #000000',
              borderLeft: 'none',
              borderTop: 'none'
            }}>
              <img
                src={breeds[selectedBreed].image}
                alt={breeds[selectedBreed].name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: '#FF005C',
                color: '#FFFFFF',
                padding: '8px 16px',
                border: '3px solid #000000',
                fontSize: '14px',
                fontWeight: 700,
                boxShadow: '4px 4px 0 #000000'
              }}>
                {breeds[selectedBreed].size}
              </div>
            </div>

            <div style={{
              padding: '40px'
            }}>
              <h3 style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#000000',
                marginBottom: '16px',
                letterSpacing: '1px'
              }}>
                {breeds[selectedBreed].name}
              </h3>

              <p style={{
                fontSize: '18px',
                color: '#000000',
                marginBottom: '24px',
                fontWeight: 400
              }}>
                {breeds[selectedBreed].description}
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{
                  backgroundColor: '#00F0FF',
                  border: '3px solid #000000',
                  padding: '16px',
                  boxShadow: '4px 4px 0 #000000'
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
                    ENERGY LEVEL
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 700 }}>
                    {breeds[selectedBreed].energy}
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#FF005C',
                  color: '#FFFFFF',
                  border: '3px solid #000000',
                  padding: '16px',
                  boxShadow: '4px 4px 0 #000000'
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
                    CARE LEVEL
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 700 }}>
                    {breeds[selectedBreed].care}
                  </div>
                </div>
              </div>

              <div style={{
                borderTop: '3px solid #000000',
                paddingTop: '24px'
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  letterSpacing: '1px'
                }}>
                  KEY TRAITS:
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {breeds[selectedBreed].traits.map((trait, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: '#000000',
                        color: '#00F0FF',
                        border: '3px solid #000000',
                        padding: '8px 16px',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '1px'
                      }}
                    >
                      {trait}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BreedSelector
