import React, { useState } from 'react'
import './LoginPopup.css'

function LoginPopup({setShowLogin}) {
    const [curstaus,setCurstatus]=useState("Sign Up")
  return (
    <div className='LoginPopup'>
       <form action="" className="login-form-cont">
        <div className="login-pop-title">
            <h2>{curstaus}</h2>
            <img  onClick={()=>setShowLogin(false)} src="https://imgs.search.brave.com/WPv8cz8g2R5GHtirpQqI6aHX_FmLBWtvylvp9xzL-lk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9t/aXNjZWxsYW5lb3Vz/L21pbWUtaWNvbi9j/cm9zcy0xOS5wbmc" alt="" />
        </div>
        <div className="login-pop-input">
            {curstaus==="Login"?<></>: <input type="text" placeholder='Full name' required />}
           
            <input type="text" placeholder='Email' required />
            <input type="password" placeholder='Password' required />   
        </div>
        <button>{curstaus==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condi">
            <input type="checkbox" required />
            <p>By Continuting ,i agree to the terms of use & privacy policy.</p>
        </div>
        {curstaus==="Login"? <p>Create a new account <span onClick={()=>setCurstatus("Sign Up")}>Click here</span></p>:
        <p>Already have an account? <span onClick={()=>setCurstatus("Login")}>Login here</span></p>}
       
        
       </form>
    </div>
  )
}

export default LoginPopup