import React, { useState } from "react";
import Menu from "./Productmenu";
import Productlist from "./Productlist";
import { Fade } from "react-awesome-reveal";


const Products = () => {
  const [item, setItem] = useState(Menu);

  const filterItem = (categItem) =>{
      const updatedItem = Menu.filter((curelem) => {
           return curelem.category === categItem ;
      })
      setItem(updatedItem);
  }

  return (
    <>

      <div className="Mainpro">
      <Fade direction="up">
        <h3 className="text-center foodhead ">Best Prices & Offers New Products</h3>
        </Fade>
        <div className="container mt-2 mb-2 my-sm-4">
        <div className="row justify-content-center">
        <div className="col">
          <div className="d-flex justify-content-center align-items-center gap-sm-2">
            <button className="but2 onlybut py-1 px-3 py-sm-2 px-sm-4 " onClick={() => filterItem('Fruit')}>Fruit</button>
            <button className="but2 onlybut py-1 px-3 py-sm-2 px-sm-4 " onClick={() => filterItem('Vegetable')}>Vegetable</button>
            <button className="but2 onlybut py-1 px-3 py-sm-2 px-sm-4 " onClick={() => filterItem('Dry Fruit')}>Dryfruit</button>
            <button className="but2 onlybut py-1 px-3 py-sm-2 px-sm-4 " onClick={() => filterItem('Grains')}>Grains</button>
          </div>
        </div>
        </div>
       </div>
        <div className="main-items container" >
      
          <div className="row">
                 
                { 
                  item.map((elem) => {
                  //console.log(image);
                     return <Productlist key={elem.id} {...elem} />
                })}
              </div>
              </div>
            </div>
     
  
    </>
  );
};

export default Products;
