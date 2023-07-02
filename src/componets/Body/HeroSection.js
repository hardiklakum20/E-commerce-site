import React from 'react'
import './Hero.css'
import { NavLink } from 'react-router-dom'


const HeroSection = ({myData}) => {
    const {name} = myData
  return (
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to</p>
                    <h1>{name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fuga. Sequi, nisi unde aut quam iure sunt
                        commodi corrupti eum.Itaque possimus harum ipsam voluptas eum laboriosam, quo aut cum.
                    </p>
                    <NavLink>
                        <button>Shop Now</button>
                    </NavLink>
                </div>
                {/* our homepage image */}
                <div className='hero-section-image'>
                    <figure>
                        <img src='./Picture/hero.jpg' alt='hero-section-photo' className='img-style'/>
                    </figure>
                </div>
            </div>
        </div>
  )
}

export default HeroSection