import React, { useContext, useEffect } from 'react'
import Heros from '../Component/Home/Heros';
import Box from '../Component/Home/Box';
import MiddleH from '../Component/Home/MiddleH';
import Cards from '../Component/Home/Cards';
import Footer from '../Component/Footer';
import Products from '../Component/Home/Products';
import Cartfun from '../Component/Cart/Cartfun';
import Cartcontext from '../Context/Cartcontext';


const Home = () => {
   
  const cartfn = new Cartfun();

  const gblctx = useContext(Cartcontext);

  const [cart, setCart] = gblctx.cartData;

  useEffect(() =>{
      cartfn.createCart(setCart);
  },[setCart]);

  return (
    <div>
       <Heros />
       {/* <Box />  */}
       <MiddleH />
       <Products />
        <Cards />
        <Footer />
    </div>
  )
}

export default Home
