import React from 'react';
import agree from '../../Assets/Images/foodimg/agreeservice.jpg';
import store from '../../Assets/Images/foodimg/organicstore.webp';
import product from '../../Assets/Images/foodimg/productsimg.jpg';
import { Zoom } from 'react-awesome-reveal';

const Servicesection = () => {
  return (
    <>
        <div className='container py-lg-5'>
           <div className='row my-5'>
              <div className='col-sm-6 col-md-4 py-3 '>
              <Zoom duration={2000} triggerOnce>
                <div className='cardd'>
                    <img className='servimg' src={agree} alt='imgg'/>
                    <div className='cardd-body'>
                        <h4 className='cardd-title'>Agricultural Services</h4>
                        <p className='textpara'>It is a long established fact that a reader will be
                         distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
              </Zoom>
              </div>
              <div className='col-sm-6 col-md-4 py-3'>
              <Zoom duration={2000} triggerOnce>
                <div className='cardd'>
                    <img  className='servimg' src={store} alt='imgg'/>
                    <div className='cardd-body'>
                        <h4 className='cardd-title'>Organic Store Services</h4>
                        <p className='textpara'>It is a long established fact that a reader will be
                         distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                </Zoom>
              </div>
              <div className='col-sm-6 col-md-4 py-3 '>
              <Zoom duration={2000} triggerOnce>
                <div className='cardd'>
                    <img className='servimg' src={product} alt='imgg'/>
                    <div className='cardd-body'>
                        <h4 className='cardd-title'>Product Delivery Services</h4>
                        <p className='textpara'>It is a long established fact that a reader will be
                         distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                </Zoom>
              </div>
           </div>
        </div>
    </>
  )
}

export default Servicesection
