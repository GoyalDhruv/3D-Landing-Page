import React from 'react'
import HeroSection from './components/HeroSection'
import About from './components/About'
import NavBar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <NavBar />
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <HeroSection />
        <About />
        <Features />
        <Story />
        <Contact />
      </main>
    </>
  )
}

export default App