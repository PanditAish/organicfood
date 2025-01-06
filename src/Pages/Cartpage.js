import React, { useContext } from 'react';
import Cartcontext from '../Context/Cartcontext';
import { useNavigate } from "react-router-dom";
import MainCartList from '../Component/Cart/MainCartList';
import { toast } from "react-toastify";

const Cartpage = () => {
  
  const gblCtx = useContext(Cartcontext);

  const [cart, setCart] = gblCtx.cartData;

  const navigate = useNavigate();

  const clearCartFun = () => {

      setCart({ product: [], grandtotal: 0 });

      localStorage.removeItem('cart');
      toast.success("No cart items");
  }

  return (
    <>
        <div className='container'>
            <div className='row my-5'>
               
            <div className='col-lg-8 col-12 col-md-8 col-xl-8'>
               {
                  cart?.product?.length > 0 ? (
                  cart.product.map((curelem) => (
                    <MainCartList cartdata={curelem} key={curelem.id} />
                  ))
                  ) : (
                        navigate('/')
                  )
               }
               
              </div>
              
                  <div className='col-lg-4 col-12 col-md-4 col-xl-4'>
                    <div className='sub-div mx-3 shadow p-4 '>
                       <p><strong>GrandTotal : </strong>{cart?.grandtotal}</p>
                        <button className='but2 onlybut py-2 px-4 m-1' onClick={() =>navigate('/checkout')} disabled={cart?.product?.length === 0}>Check Out</button>
                    </div>
                    <button className='but1 button-cart px-4 py-1 mx-lg-5 my-4' onClick={clearCartFun} disabled={cart?.product?.length === 0}>Clear Cart</button>
                  </div>
               </div>              
            </div>
            
    </>
  )
}

export default Cartpage
