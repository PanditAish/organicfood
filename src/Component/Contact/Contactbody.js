import React from 'react';
import { FaLocationArrow, FaPhoneVolume, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contactbody = () => {
  return (
    <>
       <div className='container pt-5 pb-5 my-lg-4'>
           <div className='row '>
               <div className='col-lg-4 col-md-4 col-sm-12 p-4'>
                  <div className='addbox pt-5 pb-3 text-center shadow'>
                    <Link to="#" className="icon-div"><FaLocationArrow  className='icons'/></Link>
                     <h3 className='mt-4 text-white'>Address</h3>
                     <p className='fs-5 text-white'>Tasgaon</p>
                  </div>
               </div>
            <div className='col-lg-4 col-md-4 col-sm-12 p-4'>
               <div className='addbox pt-5 pb-3 text-center shadow'>
               <Link to="#" className="icon-div"><FaPhoneVolume className='icons'/></Link>
                     <h3 className='mt-4 text-white'>Phone No</h3>
                     <p className='fs-5 text-white'>3546372723</p>
                  </div>
               </div>
            <div className='col-lg-4 col-md-4 col-sm-12 p-4'>
               <div className='addbox pt-5 pb-3 text-center shadow'>
               <Link to="#" className="icon-div"><FaEnvelope className='icons'/></Link>
                     <h3 className='mt-4 text-white'>Email</h3>
                     <p className='fs-5 text-white'>abp@gmail.com</p>
                  </div>
               </div>
           </div>
       </div>
    </>
  )
}

export default Contactbody;
