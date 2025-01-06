import React from 'react'
import pro from '../../Assets/Images/foodimg/waste.png';
import cart from '../../Assets/Images/foodimg/checkout.png';
import check from '../../Assets/Images/foodimg/accept.png';
import order from '../../Assets/Images/foodimg/food-delivery.png';

const Box = () => {
  return (
    <>
       <div className='container inner-div pt-5 pb-3 shadow-lg'>
          <h3 className='mobviewtext text-center pb-2'>How it works</h3>
          <div className='row m-4 box-design'>
              <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className='d-flex py-2 '>
                  <img src={pro} alt='cartimg' className='smimg'/>
                  <h6 className='pt-2 mx-3'>Select Product</h6>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12  ">
              <div className='d-flex py-2'>
                 <img src={check} alt='cartimg' className='smimg'/>
                 <h6 className='pt-2 mx-3'>Check Out</h6>
                 </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 ">
              <div className='d-flex py-2'>
                  <img src={cart} alt='cartimg' className='smimg'/>
                  <h6 className='pt-2 mx-3'>Add To Cart</h6>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 "> 
              <div className='d-flex py-2'>
                 <img src={order} alt='cartimg' className='smimg'/>
                 <h6 className='pt-2 mx-3'>Waiting To Delivery</h6>
                 </div>
              </div>
           </div>    
       </div> 
    </>
  )
}

export default Box;
