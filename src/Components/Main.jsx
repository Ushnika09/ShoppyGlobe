import React, { useContext, useEffect, useState } from "react";
import Slider from "./Slider";
import Actions from "./Actions";
import Card from "./Card";
import CartContext from "./CartContext";


function Main() {
  let url = "https://dummyjson.com/products?limit=132";
  let [pdtArr,setPdtArr]=useState([])
  let [filteredPdt,setFilterdPdt]=useState([])
  let {cartItems,setCartItems}=useContext(CartContext)
  

  useEffect(() => {
    let fetchData = async () => {
      try {
        let api = await fetch(url);
        let data = await api.json();
        console.log(data.products);
        setPdtArr(data.products)
        setFilterdPdt(data.products)

      } catch (err) {
        console.log("Error ", err);
      }
    };
    fetchData();
    
  }, []);

  useEffect(() => {
  console.log("Cart updated:", cartItems);
}, [cartItems]); 

  let categories=[...new Set(pdtArr.map(p=>p.category))]
  // console.log(categories);

  function handleCategoryChange(cat){
    if(cat=="all"){
      setFilterdPdt(pdtArr)
    }else{
      setFilterdPdt(pdtArr.filter((p)=>p.category==cat))
    }
  }

  function handleSort(opt){

    let sorted=[...filteredPdt]

    if(opt==="a-z"){
      sorted.sort((a,b)=>a.title.localeCompare(b.title))
    }else if(opt==="high-low"){
      sorted.sort((a,b)=>b.price-a.price)
    }else if(opt==="low-high"){
      sorted.sort((a,b)=>a.price-b.price)
    }else if(opt==="rating"){
      sorted=sorted.filter((p)=>p.rating>=4)
    }else{
      sorted=[...pdtArr]
    }

    setFilterdPdt(sorted)
  }

  const addToCart=(pdt)=>{
    setCartItems((prev)=>[...prev,pdt])
    
  }



  return (
    <div className="min-h-screen">
      <Slider />
      <Actions  categories={categories} categoryChange={handleCategoryChange} onSort={handleSort} />
      <h1 className="px-[1.5rem] py-3 text-xl text-gray-900/60">Showing {filteredPdt.length} products</h1>
      <Card pdtArr={filteredPdt} addToCart={addToCart}/>
    </div>
  );
}

export default Main;
