import React, { useContext, useEffect, useState } from "react";
import Cartitem from "./Cartitem";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";

function Cart() {
  let {cartItems}=useContext(CartContext)
    
  useEffect(()=>{
    console.log("Cart",cartItems);  
  },[cartItems])
  return (
    <div className="min-h-[28rem]">
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center flex-col min-h-[28rem]">
          <img
            src={logo}
            alt=""
            className="md:h-[6rem] md:p-[1rem] h-[4rem] p-[1rem] bg-[#00BFFF] rounded-full  "
          />
          <p className="text-[#00BFFF] text-4xl font-bold my-2.5">
            Your cart is empty
          </p>
          <p className="text-gray-700/80 text-xl my-2.5">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            to="/"
            className="rounded-lg bg-[#00BFFF] px-[1rem] py-3 text-xl my-2.5 hover:cursor-pointer font-semibold text-white hover:bg-[#00ACE6]"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <Cartitem cartItems={cartItems}/>
      )}
    </div>
  );
}

export default Cart;
