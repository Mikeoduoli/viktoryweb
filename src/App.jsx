import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    <h1 className="text-3xl font-bold underline">
      <Nav />
      <Hero />
      <Shop />
      <Branding />
      <Reviews />
      <About />
      <Footer />
      {/* Hello world! */}
    </h1>
    
    </>
  )
}

export default App
