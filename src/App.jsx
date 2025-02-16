import React from 'react'
import HeroSection from './components/HeroSection'
import About from './components/About'
import NavBar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'

function App() {
  return (
    <>
      <NavBar />
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <HeroSection />
        <About />
        <Features />
        <Story />
      </main>
    </>
  )
}

export default App