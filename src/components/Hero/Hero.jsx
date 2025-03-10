import React from 'react'
import './Hero.css'
import GradientText from '../Animations/GradientText/GradientText'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
            >
              <h1>Anarkali Boutique</h1>
            </GradientText>
            <p>Designs of unique style</p>
            <button className='btn'>
                <a href='https://instagram.com/amalkochuparambilp'>Explore More</a>
            </button>
        </div>
    </div>
  )
}

export default Hero