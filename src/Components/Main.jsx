import React, { useContext, useEffect, useState } from "react";
import Slider from "./Slider";
import Actions from "./Actions";
import Card from "./Card";
import CartContext from "./CartContext";
import SearchContext from "./SearchContext";

function Main() {
  let url = "https://dummyjson.com/products?limit=132";
  let [pdtArr, setPdtArr] = useState([]);
  let [filteredPdt, setFilterdPdt] = useState([]);
  let { setCartItems } = useContext(CartContext);
  let { searchItems, setSearchItems } = useContext(SearchContext);

  let [sortOpt, setSortOpt] = useState("");
  let [category, setCategory] = useState("all");

  useEffect(() => {
    let fetchData = async () => {
      try {
        let api = await fetch(url);
        let data = await api.json();
        // console.log(data.products);
        setPdtArr(data.products);
        setFilterdPdt(data.products);
      } catch (err) {
        console.log("Error ", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const query = searchItems.trim().toLowerCase();
    let res = [...pdtArr];

    if (query !== "") {
      res = res.filter((p) => p.title.toLowerCase().startsWith(query)); //Search
    }

    if (category !== "all") {
      res = res.filter((p) => p.category == category); //category
    }

    if (sortOpt === "a-z") {
      res.sort((a, b) => a.title.localeCompare(b.title)); //sorting
    } else if (sortOpt === "high-low") {
      res.sort((a, b) => b.price - a.price);
    } else if (sortOpt === "low-high") {
      res.sort((a, b) => a.price - b.price);
    } else if (sortOpt === "rating") {
      res = res.filter((p) => p.rating >= 4);
    }

    setFilterdPdt(res);
  }, [pdtArr, searchItems, category, sortOpt]);

  let categories = [...new Set(pdtArr.map((p) => p.category))];
  // console.log(categories);

  const addToCart = (pdt) => {
    setCartItems((prev) => [...prev, pdt]);
  };

  return (
    <div className="min-h-screen">
      <Slider />
      <Actions
        categories={categories}
        category={category}
        sortOpt={sortOpt}
        categoryChange={setCategory}
        onSort={setSortOpt}
        clearFilters={() => {
          setCategory("all");
          setSortOpt("");
          setSearchItems("");
        }}
      />
      <h1 className="px-[1.5rem] py-3 text-xl text-gray-900/60">
        Showing {filteredPdt.length} products
      </h1>
      <Card pdtArr={filteredPdt} addToCart={addToCart} />
    </div>
  );
}

export default Main;
