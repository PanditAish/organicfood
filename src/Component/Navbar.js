import React, { useContext } from "react";
import web from "../Assets/Images/foodimg/leafimg.png";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Redux/authProvider/Action";
import Cartcontext from '../Context/Cartcontext';

const Navbar = () => {
  const cartCtx = useContext(Cartcontext);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logoutFun = () => {
    if (user != null) {
      dispatch({ type: logOut, payload: null });

    }
  };
  const [cart] = cartCtx.cartData;

  const cartCount = cart?.product?.length || 0;

  return (
    <>
      <nav className="navbar navbar-expand-lg p-2 shadow-sm">
        <div className="container">
          <div className="logo-div">
            <img
              className="imgnav"
              src={web}
              alt="leafimg"
              height="40px"
              width="40px"
            />
            <Link className="navbar-brand" to="/">
              Organic
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={logoutFun}>
                  {user != null ? "Logout" : "Login"}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cartpage">
                  <FaShoppingCart />
                  <span className="m-1 bg-body-secondary rounded-5 px-2">{cartCount}</span>
                </Link>
                
              </li>
              {/* <li className="nav-item">
                      <Link className="nav-link" to="#">
                         <FaRegHeart />
                      </Link>
                   </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
