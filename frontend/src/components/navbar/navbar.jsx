import React, { useContext, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

function Navbar({setShowLogin}) {
  const[menu,setMenu]=useState("Home");
  const{gettotal}=useContext(StoreContext);
  
  return (
    <div className='navbar'>
      <img src="https://imgs.search.brave.com/yDwMAT0FtudXz8MnHgdnB-pldG4xjZrQkMryQbVV9QM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTEvWm9tYXRvLUxv/Z28tNzAweDM5NC5w/bmc" alt="" className="logo" />
      <ul className="navbar-menue">
        <Link to={'/'} onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href="#Appdownlod" onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href="#Footer"onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
        </ul> 
        <div className="navbar-right">
        <img src="https://imgs.search.brave.com/vjJfmOJ3RXs04qasAwH7twTCWnkql1oLJw8QQEibnyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzI1LzczLzY4/LzM2MF9GXzMyNTcz/Njg5N19seW91dWlD/a1dJNTlTWkFQR1BM/WjVPV1FqdzJHdzRx/WS5qcGc" alt="" className="logosearch" />
        <div className="nav-search-icon">
         <Link to={'/cart'} ><img src="https://imgs.search.brave.com/M-1a5eAPqrIdNRP1rI8gKozrIm53MTYvS5lBvOTJJlM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzkzLzQyLzgz/LzM2MF9GXzk5MzQy/ODM5N183a2hrYWVP/ZHBrSzJxRll5amcw/MUR3SHI1QkpDNXE5/Ri5qcGc" alt="" className="logocart" /></Link>
         
          <div className={gettotal()===0?"":"dot"}></div>
</div>
 <button 
        onClick={() => setShowLogin(true)}  // Now this will work
        className="sign-in-btn"
      >
        Sign in
      </button>
        </div>
    </div>
  )
}

export default Navbar