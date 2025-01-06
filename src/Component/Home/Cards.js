import React from "react";
import smoot from '../../Assets/Images/foodimg/smoothi.png';
import ofood from '../../Assets/Images/foodimg/orfood.png';
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const Cards = () => {
  return (
    <div className="container mt-5 mb-5 pb-4 pt-3">
    <Fade direction="up">
      <h3 className=" mobviewtext text-center mb-5">What We Offer For You</h3>
      </Fade>
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
        <Slide direction="left" duration={3000} triggerOnce>
          <div className="card demo1 shadow">
            <div className="card-body my-3 d-flex">
              <div className="body-one mx-3">
                <h5 className="card-title">Organic Food</h5>
                <p className="card-text pareg">
                Shop our selection of organic fresh vegetables in a discounted price. 10% off on all vegetables.
                </p>
                <Link to="#" className="btn1">
                   <button className="but1 py-1 px-3">Shop Now</button> 
                </Link>
              </div>
              <div className="body-two">
                <img src={ofood} alt="foodig" className="foodimg img-fluid"/>
              </div>
            </div>
          </div>
          </Slide>
        </div>
        <div className="col-12 col-md-6">
        <Slide direction="right" duration={3000} triggerOnce>
          <div className="card demo2 shadow">
            <div className="card-body my-3 d-flex">
              <div className="cb-one mx-3">
              
                <h5 className="card-title">Al Smoothis</h5>
                <p className="card-text pareg">
                Shop our selection of organic fresh vegetables in a discounted price. 10% off on all vegetables.
                </p>
                <Link to="#" className="btn2">
                   <button className="but2 py-1 px-3">Shop Now</button> 
                </Link>
              </div>
              <div className="cb-two">
                 <img src={smoot} alt="foodimg" className="foodimg img-fluid"/>
              </div>
            </div>
          </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Cards;
