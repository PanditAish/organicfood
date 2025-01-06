import React from "react";
import vegi from '../../Assets/Images/foodimg/girls.jpg';
import fast from '../../Assets/Images/foodimg/delivery-truck.png';
import secure from '../../Assets/Images/foodimg/secure-payment.png';
import fresh from '../../Assets/Images/foodimg/vegan.png';
import cancel from '../../Assets/Images/foodimg/delivery-cancelled.png';
import { Fade, Slide } from 'react-awesome-reveal'

const MiddleH = () => {
  return (
    <>
      
      <div className="container main-mid mt-4 mb-5 pt-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xl-6 col-12 d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center img-mid-div">
              <img className="img-fluid mid-img" src={vegi} alt="girlimg" />
            </div>
          </div>

          <div className="homemid col-lg-6 col-xl-6 col-md-12 col-12 mt-3 ">
           <Fade direction="up">
            <h3 className="mobviewtext">Why Choose Us?</h3>
            </Fade>
            <Slide direction="right" duration={3000} triggerOnce>
            <div className="col mt-5">
              <div className="col d-flex mt-2">
                <img src={secure} alt="cartimg" className="demoimg"/>
                <div>
                  <h6 className=" mx-3">100% Payment Secure</h6>
                  <p className="pareg mx-3">payments are performed under an encrypted network and a secure method 
                  of transmission provided by our partner</p>
                </div>
              </div>
              <div className="col d-flex mt-3">
                <img src={fast} alt="cartimg" className="demoimg"/>
                <div>
                  <h6 className=" mx-3">Fast Delivery Just</h6>
                  <p className="pareg mx-3">Enjoy exclusive deals with fast delivery only at organic. There's nothing more
                   exciting than receiving your order on the same day.</p>
                </div>
              </div>
              <div className="col d-flex mt-3">
                <img src={cancel} alt="cartimg" className="demoimg"/>
                <div>
                  <h6 className=" mx-3">Skip and Cancel Anytime</h6>
                  <p className="pareg mx-3">You must skip your delivery by the last date listed to update this order
                   displayed in your upcoming deliveries</p>
                </div>
              </div>
              <div className="col d-flex mt-3">
                <img src={fresh} alt="cartimg" className="demoimg"/>
                <div>
                  <h6 className=" mx-3">100% fresh and Organic food</h6>
                  <p className="pareg mx-3 ">You must skip your delivery by the last date listed to update this order
                   displayed in your upcoming deliveries</p>
                </div>
              </div>
            </div>
            </Slide>
          </div>
          
        </div>
      </div>
    
    </>
  );
};

export default MiddleH;
