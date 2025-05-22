import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);
import { food_list } from "../assets/assests";


const StoreContextProvider = (props) => {
const [cartItems,setCarditem]=useState({});
const addToCart = (itemId) => {
  if (!cartItems[itemId]) {
    setCarditem((prev) => ({ ...prev, [itemId]: 1 }));
  }
  else{
    setCarditem((prev) => ({ ...prev, [itemId]: prev[itemId]+1 }));
  }
};

const removeCart = (itemId) => {
  setCarditem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
};

const gettotal=()=>{
    let totalammount=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let iteminfo=food_list.find((product)=>product._id===item);
      totalammount+=iteminfo.price*cartItems[item];
      }
      
    }
    return totalammount;
}

useEffect(()=>{
    console.log(cartItems);
},[cartItems])
    const contextValue = {
        food_list,
        cartItems,
        setCarditem,
        addToCart,
        removeCart,
        gettotal
    };
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;