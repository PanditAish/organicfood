import React from 'react'
import Abouthero from '../Component/About/Abouthero'
import Contactbody from '../Component/Contact/Contactbody'
import Footer from '../Component/Footer'
import Contactform from '../Component/Contact/Contactform'

const Contact = () => {
  return (
    <>
      <div className='contact-div'>
          <Abouthero name="Contact Us" link="/contact"/>  
      </div>
      <Contactbody />
      <Contactform />
      <Footer />
    </>
  )
}

export default Contact
