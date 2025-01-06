import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Header from '../Component/Header';
import "../Assets/Styles/styled.css";
import Service from "../Pages/Service";
import Contact from '../Pages/Contact';
import Productpage from '../Pages/Productpage';
import Cartpage from '../Pages/Cartpage';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';
import Checkoutpage from '../Pages/Checkoutpage';

const Allroutes = () => {
  return (
    <div>
      <Header />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/productpage/:id' element={<Productpage/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/cartpage' element={<Cartpage/>} />
          <Route path='/checkout' element={<Checkoutpage/>} />
      </Routes>
    </div>
  )
}

export default Allroutes;
