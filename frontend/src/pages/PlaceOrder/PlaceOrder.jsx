import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { Link } from 'react-router-dom'

function PlaceOrder() {
  const{gettotal}=useContext(StoreContext)
  return (
   <form className='place-order'>
    <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-feilds">
        <input type="text" placeholder='First name' />
        <input type="text" placeholder='Last name' />
      </div>
      <input type="email" placeholder='Email Adress' />
      <input type="text" placeholder='Street' />
      <div className="multi-feilds">
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State' />
      </div>
      <div className="multi-feilds">
        <input type="text" placeholder='Pin code' />
        <input type="text" placeholder='country' />
      </div>
      <input type="text" placeholder='Phone' />
    </div>
    <div className="place-order-right"></div>
       <div className="cart-bottoms">
        <div className="cart-total">
                  <h2>Cart Totals</h2>
                </div>
                <div className="cart-total-detail">
                  <p>Subtotal</p>
                  <p>{gettotal()}</p>
                  <hr />
                  <div className="cart-total-detail">
                    <p>Delivery Fee</p>
                    <p>${gettotal()===0?0:2}</p>
                  </div>
                  <hr/>
                  <div className="cart-total-details">
                    <b>Total</b>
                    <b>${gettotal()===0?0:gettotal()+2}</b>
                  </div>
                </div>
                <Link to={'/order'}><button>Proceed to Payment</button></Link>
      </div>
   </form>
  )
}

export default PlaceOrder