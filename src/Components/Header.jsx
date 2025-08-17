import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import cart from "../assets/cart.png";

function Header() {
  const [online, setOnline] = useState(navigator.onLine);
  console.log(online);

  useEffect(() => {
  const goOnline = () => setOnline(true);
  const goOffline = () => setOnline(false);

  window.addEventListener("online", goOnline);
  window.addEventListener("offline", goOffline);

  return () => {
    window.removeEventListener("online", goOnline);
    window.removeEventListener("offline", goOffline);
  };
}, []);


  return (
    <div className=" py-[1.2rem]  px-[1.7rem] flex justify-between shadow-2xl min-w-full bg-white/50">
      <div className="flex gap-2.5 justify-center items-center ">
        <div className="relative">
          <img
          src={logo}
          alt=""
          className="md:h-[3rem] md:p-[0.5rem] h-[2rem] p-[0.3rem] bg-[#00BFFF] rounded-lg md:rounded-2xl "
        />
        <div
          className={`absolute md:h-[1rem] md:w-[1rem] w-[0.7rem] h-[0.7rem] rounded-full md:left-9 -top-1 -right-1 animate-pulse
              ${online ? "bg-[#FFB400]" : "bg-red-500"} `}
        ></div>
        </div>
        <p className="text-[1.1rem] md:text-2xl font-bold text-[#00BFFF]">
          ShoppyGlobe
        </p> 
      </div>

      <div className="sm:flex  justify-center items-center relative hidden">
        <input
          type="text"
          placeholder="Search products..."
          className="border-2 border-gray-600/50 py-2 pl-[2rem] bg-neutral-100 rounded-xl  max-w-sm"
        />
        <img src={search} alt="" className="h-[1.3rem] absolute left-2" />
      </div>

      <div className="flex gap-[3rem] justify-center items-center">
        <p className="text-[1rem] md:text-xl hover:cursor cursor-pointer hover:text-[#00BFFF] px-[1.3rem] py-[0.5rem] hover:bg-neutral-100 rounded-sm">Home</p>
        <img
          src={cart}
          alt=""
          className="h-[2rem] md:h-[3rem] md:p-[0.5rem]  p-[0.3rem] hover:cursor cursor-pointer hover:text-[#00BFFF] px-[1.3rem] py-[0.5rem] hover:bg-neutral-100  rounded-sm"
        />
      </div>
    </div>
  );
}

export default Header;
