import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Abouthero = (props) => {
  return (
    <>
       {/* <div className='about-div'> */}
         <div className='overlay'>
          <h1 className='text-center pt-5' style={{color:"white", fontSize:"3rem"}}>{props.name}</h1>
          <div className='d-flex justify-content-center my-4'>
            <p className='mx-3'><a href='/' style={{color:"white", textDecoration:"none"}}>Home</a></p>
            <p style={{color:"white"}}><FaAngleRight /></p>
            <p className='mx-3'><a href={props.link} style={{color:"white", textDecoration:"none"}}>{props.name}</a></p>
          </div>
          </div> 
       {/* </div> */}
    </>
  )
}

export default Abouthero
