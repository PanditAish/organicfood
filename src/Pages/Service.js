import React from 'react';
import Abouthero from '../Component/About/Abouthero';
import Servicesection from '../Component/Service/Servicesection';
import Footer from '../Component/Footer';

const Service = () => {
  return (
    <>
      <div className='service-div'>
        <Abouthero name="Services" link="/service"/>
      </div>
      <Servicesection />
      <Footer />
    </>
  )
}

export default Service;
