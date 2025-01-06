import React from "react";
import webb from "../Assets/Images/foodimg/leafimg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="container-fluid backgf">
      <div className="container p-5">
        <div className="row gx-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="boxa">
              <div className="div-img d-flex">
                <img className="imgnavv" src={webb} alt="leafimg" />
                <h5 className="headbox text-white fw-bolder pb-2">Organic</h5>
              </div>
              <p className="text-white">
                We work with a passion of taking challenges and creating new
                ones in advertising sector.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-sub">
              <ul className="list-unstyled ">
                <li className="list-title mb-3">Links</li>
                <li>
                  <Link className="text-decoration-none text-white " to="/about">About us</Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white" to="/service">Services</Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white" to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-sub">
              <ul className="list-unstyled">
                <li className="list-title mb-3">Info</li>
                <li>
                  <Link className="text-decoration-none text-white" to="#">8275496455</Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white" to="#">Tasgoan</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-sub">
              <ul className="list-unstyled">
                <li className="list-title mb-3">Open Hours</li>
                <li>
                  <Link className="text-decoration-none text-white" to="/about">Mon - Sat : 8am - 5pm</Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white" to="/service">Sunday : CLOSED</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="footer-small text-center py-2 text-white">
        @2023 Organic - All right reserved.
      </div>
    </>
  );
};

export default Footer;
