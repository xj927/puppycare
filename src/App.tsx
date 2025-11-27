import React, { useState } from 'react'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header'
import Hero from './components/Hero'
import CareGuides from './components/CareGuides'
import BreedSelector from './components/BreedSelector'
import HealthTips from './components/HealthTips'
import TrainingSection from './components/TrainingSection'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [authModalOpen, setAuthModalOpen] = useState(false)

  return (
    <AuthProvider>
      <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <Header 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          onAuthClick={() => setAuthModalOpen(true)}
        />
        <Hero />
        <CareGuides />
        <BreedSelector />
        <TrainingSection />
        <HealthTips />
        <Footer />
        <AuthModal 
          isOpen={authModalOpen} 
          onClose={() => setAuthModalOpen(false)} 
        />
      </div>
    </AuthProvider>
  )
}

export default App
