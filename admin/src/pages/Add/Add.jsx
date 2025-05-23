import React, { useState } from 'react'
import './Add.css';

function Add() {
const [image,setImage]=useState(false);
const [data,setData]=useState({
    name:"",
    description:"",
    Price:"",
    category:"Salad"
})


  return (
    <div className='Add'>
        <form className='flex-col'>
            <div className="image-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                 <img src={image?URL.createObjectURL(image):"https://imgs.search.brave.com/hGGKAD97h7DUfPOPyxubMM2tmvhvuq9Onh7SXn4jxAc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vQ1k1NDIy/RFRwRXk4Wk5NclBH/RTlGaDQwZDZfR1p4/ZVlodEh4TmY1cEgy/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/Wkc0dS9hV052Ym5O/amIzVjBMbU52L2JT/OXBZMjl1TDJaeVpX/VXYvY0c1bkxUSTFO/aTltY21WbC9MWFZ3/Ykc5aFpDMXBZMjl1/L0xXUnZkMjVzYjJG/a0xXbHUvTFhOMlp5/MXdibWN0WjJsbS9M/V1pwYkdVdFptOXli/V0YwL2N5MHRiR2x1/WlMxemRIbHMvWlMx/M1pXSXRhV052Ym5N/dC9jR0ZqYXkxelpX/OHRORFl3L056SXdM/bkJ1Wno5bVBYZGwv/WW5BbWR6MHhNamc.jpeg"} alt="" />
                 <p>Upload</p>
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
            </div>
            <div className="add-pro-name flex-col">
                <p>Product name</p>
                <input type="text" name="name"placeholder='Type here' />
            </div>
            <div className="product-description flex-col">
            <p>Product description</p>
            <textarea name="description"rows='6' placeholder='Write content here' ></textarea>
            </div>
            <div className="add-cat-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select name="category" >
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Desert">Desert</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p> Product Price</p>
                    <input type="Number" name='Price' placeholder='$20' />

                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>


        </form>
    </div>
  )
}

export default Add