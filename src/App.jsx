import React from 'react'
import HeroSection from './components/HeroSection'
import About from './components/About'
import NavBar from './components/Navbar'

function App() {
  return (
    <>
      <NavBar />
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <HeroSection />
        <About />
      </main>
    </>
  )
}

export default App