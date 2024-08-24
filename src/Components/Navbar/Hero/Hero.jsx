import React from 'react'
import dark_arrow from '../../../assets/dark arrow.webp'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Welcome to BabyStep</h1>
<p>Your journey to a more productive life starts with small steps. At BabyStep, we believe in the power of consistency and gradual progress. Whether you're looking to build new habits, manage your tasks, or simply make the most of your time, we're here to help you take those crucial first steps. Let's grow together, one step at a time.</p>

            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
