import React from 'react'
import './Features.css'
import feature1 from '../../assets/features_1.jpg'
import feature2 from '../../assets/features_2.png'
import feature3 from '../../assets/features3.jpeg'
import feature1_icon from '../../assets/feature1_icon.png'
import feature2_icon from '../../assets/feature2_icon.jpg'
import feature3_icon from '../../assets/feature3_icon.png'


const Features = () => {
  return (
    <div className='features'>
      <div className="feature">
        <img src={feature1} alt="" />
        <div className='caption'> 
            <img src={feature1_icon} alt="" />
            <p>To-Do List</p>
        </div>
      </div>
      <div className="feature">
        <img src={feature2} alt="" />
        <div className='caption'> 
            <img src={feature2_icon} alt="" />
            <p>Pomodoro Technique</p>
        </div>
      </div>
      <div className="feature">
        <img src={feature3} alt="" />
        <div className='caption'> 
            <img src={feature3_icon} alt="" />
            <p>Meditation Corner</p>
        </div>
      </div>
      
     
    </div>
  )
}

export default Features
