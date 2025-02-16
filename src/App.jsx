import React from 'react'
import HeroSection from './components/HeroSection'
import About from './components/About'

function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <HeroSection />
      <About />
    </main>
  )
}

export default App