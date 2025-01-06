import React from 'react';
import ReactDOM  from 'react-dom';
//import './index.css';
import  App from './App';
import { BrowserRouter } from "react-router-dom";
import { Globalcart } from './Context/Cartcontext';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Globalcart>
       <App />
      </Globalcart>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




