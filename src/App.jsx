import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Features from './Components/Features/Features'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Features/>
      </div>
    </div>
  )
}

export default App
