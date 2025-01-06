import React, { useContext, useEffect, useState } from "react";
import { FaRegEye, FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Cartcontext from "../../Context/Cartcontext";
import Cartfun from "../Cart/Cartfun";
import { toast } from "react-toastify";

const Productlist = (elem) => {
  const cartfn = new Cartfun();

  const cartCtx = useContext(Cartcontext);

  const [cart, setCart] = cartCtx.cartData;

  const { id, image, name, category, price } = elem;

  const [product, setProduct] = useState([]);

  const [count, setCount] = useState(1);

  const incrementCount = () => {
    if (count <= 100) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    const payload = {
      id: uuidv4(),
      name: name,
      category: category,
      price: price,
      quantity: count,
      amount: Number(price) * Number(count),
    };
    setProduct((cart.product = [...cart.product, payload]));
    setCount(1);
    toast.success("Added to cart")
  };

  useEffect(() => {
    cartfn.addCart(setCart, product);
  }, [product]);

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 p-4 p-md-4">
        <div className="fcard bg-white shadow rounded-3">
          <div className="d-flex w-100 justify-content-center align-items-center p-3 ">
            <div className="img-pro-div">
              <img src={image} alt={name} className="product-img" />
              <div className="img-text d-flex justify-content-center">
                {/* <Link className="nav-link mx-3 text-white fs-4" to="#">
                  <FaRegHeart />
                </Link> */}
                <Link
                  className="nav-link mx-3 text-white fs-3"
                  to={`/productpage/${id}`}
                >
                  <FaRegEye />
                </Link>
              </div>
            </div>
          </div>
          <div className="item1-body d-flex flex-column justify-content-center align-items-center">
            <h3 className="fs-4 prod-name">{name}</h3>
            <h6>Price : {price}</h6>
            <div className="countnum d-flex justify-content-lg-start mx-5">
              <button
                className="countbutton border-0"
                onClick={() => {
                  decrementCount();
                }}
              >
                <FaMinus />
              </button>
              <p className="mx-3 fs-5">{count}</p>
              <button
                className="countbutton border-0"
                onClick={() => {
                  incrementCount();
                }}
              >
                <FaPlus />
              </button>
            </div>
            <button
              className="but1 button-cart px-4 py-2 m-3 mt-0"
              onClick={() => {
                addToCart();
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productlist;
