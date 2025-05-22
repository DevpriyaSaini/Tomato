import React, { useContext, useState } from 'react'
import './FoodIteam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../Context/StoreContext';
function FoodIteam({id,name,price,description,image ,rating}) {
    // const [counter, setCounter]=useState(0);
    const {cartItems,addToCart,removeCart}=useContext(StoreContext);
  return (
    <div className='Food-Iteam'>
        <div className="foot-item-con">
            <img src={image} alt="" className="food-item-img" />
           {!cartItems[id]? (
  <FontAwesomeIcon 
    icon={faPlus} 
    onClick={() =>addToCart(id) }
    className="add"
  />
) : (
  <div className="counter-group">
    <FontAwesomeIcon 
      icon={faMinus}
      onClick={() =>removeCart(id)}
      className="counter-icon"
    />
    <span className="counter-value">{cartItems[id]}</span>
    <FontAwesomeIcon 
      icon={faPlus} 
      onClick={() => addToCart(id)}
      className="counter-icon"
    />
  </div>
)}
        </div>
        <div className="fooditem-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
            <img src={rating} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodIteam