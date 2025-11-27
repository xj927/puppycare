import React from 'react'
import { Target, Award, Zap, Shield } from 'lucide-react'

const TrainingSection: React.FC = () => {
  const trainingTips = [
    {
      icon: Target,
      title: 'BASIC COMMANDS',
      color: '#FF005C',
      commands: ['SIT', 'STAY', 'COME', 'DOWN', 'HEEL'],
      description: 'Foundation commands every puppy must learn'
    },
    {
      icon: Award,
      title: 'POSITIVE REINFORCEMENT',
      color: '#00F0FF',
      commands: ['TREATS', 'PRAISE', 'TOYS', 'PLAY', 'AFFECTION'],
      description: 'Reward good behavior immediately'
    },
    {
      icon: Zap,
      title: 'CONSISTENCY',
      color: '#FF005C',
      commands: ['DAILY PRACTICE', 'SAME WORDS', 'SAME RULES', 'PATIENCE', 'ROUTINE'],
      description: 'Keep training sessions short and regular'
    },
    {
      icon: Shield,
      title: 'SOCIALIZATION',
      color: '#00F0FF',
      commands: ['OTHER DOGS', 'PEOPLE', 'SOUNDS', 'PLACES', 'EXPERIENCES'],
      description: 'Expose to various environments safely'
    }
  ]

  return (
    <section style={{
      backgroundColor: '#000000',
      padding: '80px 24px',
      border: '4px solid #000000',
      borderTop: 'none'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#00F0FF',
            color: '#000000',
            padding: '8px 16px',
            border: '3px solid #00F0FF',
            marginBottom: '16px',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '2px',
            boxShadow: '4px 4px 0 #FF005C'
          }}>
            TRAINING ESSENTIALS
          </div>
          
          <h2 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '16px',
            lineHeight: 1.1,
            letterSpacing: '-1px',
            textTransform: 'uppercase'
          }}>
            BUILD GOOD<br />HABITS EARLY
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {trainingTips.map((tip, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                border: '4px solid #FFFFFF',
                padding: '32px',
                boxShadow: `8px 8px 0 ${tip.color}`
              }}
            >
              <div style={{
                backgroundColor: tip.color,
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid #000000',
                marginBottom: '16px'
              }}>
                <tip.icon size={32} color="#000000" />
              </div>

              <h3 style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#000000',
                marginBottom: '8px',
                letterSpacing: '1px'
              }}>
                {tip.title}
              </h3>

              <p style={{
                fontSize: '14px',
                color: '#000000',
                marginBottom: '16px',
                fontWeight: 400
              }}>
                {tip.description}
              </p>

              <div style={{
                borderTop: '3px solid #000000',
                paddingTop: '16px'
              }}>
                {tip.commands.map((command, cmdIndex) => (
                  <div
                    key={cmdIndex}
                    style={{
                      backgroundColor: '#000000',
                      color: tip.color,
                      border: '3px solid #000000',
                      padding: '8px 12px',
                      fontSize: '12px',
                      fontWeight: 700,
                      marginBottom: '8px',
                      letterSpacing: '1px',
                      display: 'inline-block',
                      marginRight: '8px'
                    }}
                  >
                    {command}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '48px',
          backgroundColor: '#FF005C',
          border: '4px solid #FF005C',
          padding: '40px',
          boxShadow: '8px 8px 0 #00F0FF'
        }}>
          <h3 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '16px',
            letterSpacing: '1px'
          }}>
            TRAINING SCHEDULE
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {[
              { time: '8-12 WEEKS', focus: 'BASIC SOCIALIZATION' },
              { time: '12-16 WEEKS', focus: 'BASIC COMMANDS' },
              { time: '4-6 MONTHS', focus: 'ADVANCED TRAINING' },
              { time: '6+ MONTHS', focus: 'REFINEMENT' }
            ].map((phase, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '3px solid #000000',
                  padding: '20px',
                  boxShadow: '4px 4px 0 #000000'
                }}
              >
                <div style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#FF005C',
                  marginBottom: '8px',
                  letterSpacing: '1px'
                }}>
                  {phase.time}
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '1px'
                }}>
                  {phase.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrainingSection
