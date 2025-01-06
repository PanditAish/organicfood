import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import Cartcontext from "../../Context/Cartcontext";
import Cartfun from "./Cartfun";

const MainCartList = ({ cartdata }) => {
  const cartfn = new Cartfun();

  const { name, amount, price, quantity } = cartdata;

  const gblCtx = useContext(Cartcontext);

  const [cart, setCart] = gblCtx.cartData;

  const handleDelete = () => {
    if (cart?.product?.length === 1) {
      cartfn.deleteCart(cart, setCart, cartdata);
      localStorage.removeItem("cart");
      setCart();
      cartfn.createCart(setCart);
    } else {
      cartfn.deleteCart(cart, setCart, cartdata);
    }
  };

  return (
    <>
      <div className="body-cart my-2">
        <div className="row px-4 pt-3 div-mid">
          <div className="col-4  b1">
            <h3 className="pb-2 cartt-head">{name}</h3>
            <p className="fw-medium para-one">
              <span className="fw-bold ">Price :</span> {price}
            </p>
          </div>
          <div className="col-4 b2">
            <p className="fw-medium para-one">
              <span className="fw-bold">Quantity :</span> {quantity}
            </p>
            <p className="fw-medium para-one">
              <strong>Total : </strong>
              {amount}
            </p>
          </div>
          <div className="col-4 b3">
            <button className="cartbutton border-0" onClick={handleDelete}>
              <FaTrash className="text-danger buttonicon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCartList;
