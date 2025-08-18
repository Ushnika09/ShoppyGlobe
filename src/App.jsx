import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { Outlet } from "react-router-dom";
import SearchContext from "./Components/SearchContext";
import CartContext from "./Components/CartContext";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <div className="min-h-screen">
        <Header />
        <div className="mt-[5.3rem]">
          <Outlet  />
        </div>
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
