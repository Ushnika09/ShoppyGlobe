import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Actions from "./Actions";
import Card from "./Card";

function Main() {
  let url = "https://dummyjson.com/products?limit=108";
  let [pdtArr,setPdtArr]=useState([])

  useEffect(() => {
    let fetchData = async () => {
      try {
        let api = await fetch(url);
        let data = await api.json();
        console.log(data.products);
        setPdtArr(data.products)

      } catch (err) {
        console.log("Error ", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <Slider />
      <Actions />
      <h1 className="p-[1rem] text-xl text-gray-900/60">Showing {pdtArr.length} products</h1>
      <Card pdtArr={pdtArr}/>
    </div>
  );
}

export default Main;
