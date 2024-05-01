import React from 'react'
import { useState } from 'react'
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Shop from './components/Shop'
import Branding from './components/Branding'
import Reviews from './components/Reviews'
import Nav from './components/Nav'
import Footer from './components/Footer'


const App = () => {

  return (
    <>
    <header className="mx-16 py-8">
      <Nav />
      <Hero />
      <Shop />
      <Branding />
      <Reviews />
      <About />
      <Footer />
      {/* Hello world! */}
    </header>
    
    </>
  )
}

export default App
