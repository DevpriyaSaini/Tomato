import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const url="http://localhost:4000";

const StoreContextProvider = (props) => {

const[food_list,setfoodlist]=useState([])

const [cartItems,setCarditem]=useState({});
const[token,setToken]=useState("");
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
      totalammount+=iteminfo.Price*cartItems[item];
      }
      
    }
    return totalammount;
}


async function fetchfood(event) {
  const responce=await axios.get(url+"/api/food/list");
  setfoodlist(responce.data.data)
  
}

useEffect(()=>{
    console.log(cartItems);
},[cartItems])



useEffect(()=>{

async function loadData() {
  await fetchfood();
  if (localStorage.getItem("token")) {
    setToken(localStorage.getItem("token"));
}
}
loadData();
},[])
    const contextValue = {
        food_list,
        cartItems,
        setCarditem,
        addToCart,
        removeCart,
        gettotal,
        token,
        setToken
    };
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;