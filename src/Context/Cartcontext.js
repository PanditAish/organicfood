import { createContext, useEffect, useState } from "react";

export const Cartcontext = createContext();

export const Globalcart = ({children}) =>{

    const [cart , setCart] = useState(JSON.parse(localStorage.getItem('cart')));

    const [userr, setUserr] = useState(() => {
        const storedUser = localStorage.getItem("userr");
        return storedUser ? JSON.parse(storedUser) : null;
      });

      useEffect(() => {
        if (userr) {
          localStorage.setItem("userr", JSON.stringify(userr));
        } else {
          localStorage.removeItem("userr");
        }
      }, [userr]);

      const registerUser = (userData) => {
        setUserr(userData);
      };

      const logoutUser = () => {
        setUserr(null);
      };
 
    return <Cartcontext.Provider value={{ cartData:[cart, setCart] , userr, registerUser, logoutUser }}>{children}</Cartcontext.Provider>
}

export default Cartcontext;