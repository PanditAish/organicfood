import React, { useEffect, useState } from 'react';
import appleIg from '../Assets/Images/foodimg/appleimg.jpg';
import { FaMinus, FaPlus } from 'react-icons/fa';
 import { useParams } from 'react-router-dom';
import Menu from '../Component/Home/Productmenu';

const Productpage = () => {

const { id } = useParams(); 
//console.log(id);

const [prodDetails, setprodDetails] = useState({});

const menuDetail = () =>{
      const filterProduct = Menu.find((data) => data.id === Number(id))
      setprodDetails(filterProduct);
      console.log("prod:",filterProduct);
}

useEffect(()=>{
   menuDetail();
},[id]);

  return (
    <>
       <div className='container'>
          <div className='row my-5'>
            {/* left side */}
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='Imgdiv'>
                   <img src={prodDetails.image} alt='image' className='prod-page-img shadow'/>
                </div>
            </div> 
            {/* right side */}
             <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='div-body p-1'>
                    <h1 className='product-head '>{prodDetails.name}</h1>
                    <p>This nutritious fruit offers multiple health benefits. Research says apples may also help you lose 
                       weight while improving your gut and brain health.Organic production is an overall system of farm management 
                       and food production that aims at sustainable agriculture, high-quality products and 
                       the use of processes that do not harm neither the environment, nor human, plant or animal health and welfare.</p>
                     <p className='fw-medium'><strong>Price:</strong> {prodDetails.price}</p>
                     {/* <button className='but1 px-3 py-1'>Add To Cart</button> */}
                </div>
             </div>
          </div>
       </div>
    </>
  )
}

export default Productpage
