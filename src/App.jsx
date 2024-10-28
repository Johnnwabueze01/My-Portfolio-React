import { useState } from 'react'
import Navbar from './Compenents/NavBar/navbar'
import Intro from './Compenents/Intro/intro'
import Skills from './Compenents/Skills/skills'
import Works from './Compenents/Works/works'
import Contact from './Compenents/Contact/contact'
import Footer from './Compenents/Footer/footer'



function App() {

  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
