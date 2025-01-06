import React from 'react'
import Abouthero from '../Component/About/Abouthero'
import Aboutsec from '../Component/About/Aboutsec'

const About = () => {
  return (
    <>
      <div className='about-div'>
      <Abouthero name="About" link='/about'/>
      </div>
      
      <Aboutsec />
    </>
  )
}

export default About
