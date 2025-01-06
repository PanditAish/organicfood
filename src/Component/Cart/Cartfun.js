import React from "react";

export default class Cartfun {
  createCart(setCart) {
    console.log(localStorage.getItem("cart"));
    if (localStorage.getItem("cart") === null) {
      const payload = {
        product: [],
        grandtotal: 0,
      };
      localStorage.setItem("cart", JSON.stringify(payload));

      setCart(payload);
    }
  }

  addCart(setCart, cartProduct) {
    if (localStorage.getItem("cart") && localStorage.getItem("cart") !== null) {
      if (cartProduct.length > 0) {
        let grandTotal = 0;
        cartProduct?.map(
          (curelem) =>
            (grandTotal = Number(grandTotal) + Number(curelem.amount))
        );

        const payload = {
          product: cartProduct,
          grandtotal: grandTotal,
        };
        localStorage.setItem("cart", JSON.stringify(payload));
        setCart(payload);
      }
    }
  }

  deleteCart(cart, setCart, cartProduct) {
    if (localStorage.getItem("cart") && localStorage.getItem("cart") !== null) {
      if (cartProduct) {
       const filterProduct = cart?.product.filter((data)=> data.id !== cartProduct.id);

       console.log(filterProduct);
       let grandTotal = 0;
       filterProduct?.map(
         (curelem) =>
           (grandTotal = Number(grandTotal) + Number(curelem.amount))
       );

       const payload = {
         product: filterProduct,
         grandtotal: grandTotal,
       };
       localStorage.setItem("cart", JSON.stringify(payload));

       setCart(payload);
      }
     }
    }
}


