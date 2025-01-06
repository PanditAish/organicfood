import React from "react";
import { FaUndoAlt, FaEnvira } from "react-icons/fa";
import { AiOutlineFileProtect, AiFillCustomerService} from 'react-icons/ai'
import Footer from "../Footer";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

const Aboutsec = () => {
  return (
    <>
      <div className="container py-lg-5 my-4">
        <div className="row mt-4">
          <div className="col-lg-6 col-md-6 col-sm-12">
          <Slide direction="left" duration={3000} triggerOnce>
            <div className="aboutback">
              <div className="aboutouter">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <div className="card1 shadow text-center p-4">
                      <p className="pcolor">
                        <FaUndoAlt />
                      </p>
                      <h6>Return Policy</h6>
                      <p>
                        Purchasing from select family farmers who farm
                        organically.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mob-margin">
                    <div className="card1 shadow text-center p-4">
                      <p className="pcolor">
                        <FaEnvira />
                      </p>
                      <h6>100% Fresh</h6>
                      <p>
                        Purchasing from select family farmers who farm
                        organically.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <div className="card1 shadow text-center p-4">
                      <p className="pcolor">
                        <AiFillCustomerService />
                      </p>
                      <h6>Support 24/7</h6>
                      <p>
                        Purchasing from select family farmers who farm
                        organically.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mob-margin">
                    <div className="card1 shadow text-center p-4">
                      <p className="pcolor">
                        <AiOutlineFileProtect />
                      </p>
                      <h6>Secure Payment</h6>
                      <p>
                        Purchasing from select family farmers who farm
                        organically.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Slide>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="sec-div w-75 m-5 ">
            <Zoom duration={2000}>
               <h5 style={{color:"#60a32d", paddingTop:"1rem", paddingBottom:"0.7rem"}}>Why Choose us?</h5>
               </Zoom>
               <Fade duration={3000}>
               <h3 className="foodhead" style={{paddingBottom:"0.7rem"}}>We do not buy from the open market & traders.</h3>
               </Fade>
               <p>Organic Foods and Café is a family run company that runs organic super markets and cafés 
               selling fresh organic and biodynamic food, supplers, skincare, cosmetics, baby items 
               and household cleaning products.</p>
               <p>Purchasing from select family farmers who farm organically because they believe 
               in it and so we do. We are conscious of air miles and our carbon footprint so a lot
                of our produce comes from Egypt.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutsec;
