import React, { useEffect, useState, useContext } from "react";
import Slider from "./Slider";
import Actions from "./Actions";
import Card from "./Card";
import SearchContext from "./SearchContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import useFetchProducts from "../hooks/useFetchProducts";

function Main() {
  const url = "https://dummyjson.com/products?limit=132";
  const { products: pdtArr, loading, error } = useFetchProducts(url);
  const [filteredPdt, setFilterdPdt] = useState([]);
  const { searchItems, setSearchItems } = useContext(SearchContext);

  const [sortOpt, setSortOpt] = useState("");
  const [category, setCategory] = useState("all");

  const dispatch = useDispatch();

  useEffect(() => {
    setFilterdPdt(pdtArr);
  }, [pdtArr]);

  useEffect(() => {
    const query = searchItems.trim().toLowerCase();
    let res = [...pdtArr];

    if (query !== "") {
      res = res.filter((p) => p.title.toLowerCase().startsWith(query));
    }

    if (category !== "all") {
      res = res.filter((p) => p.category === category);
    }

    if (sortOpt === "a-z") {
      res.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOpt === "high-low") {
      res.sort((a, b) => b.price - a.price);
    } else if (sortOpt === "low-high") {
      res.sort((a, b) => a.price - b.price);
    } else if (sortOpt === "rating") {
      res = res.filter((p) => p.rating >= 4);
    }

    setFilterdPdt(res);
  }, [pdtArr, searchItems, category, sortOpt]);

  const categories = [...new Set(pdtArr.map((p) => p.category))];

  const handleAddToCart = (pdt) => {
    dispatch(addToCart(pdt));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-[#00BFFF] text-xl font-semibold">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-red-500 text-xl font-semibold">
        Failed to load products.
      </div>
    );
  }

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
      <Card pdtArr={filteredPdt} addToCart={handleAddToCart} />
    </div>
  );
}

export default Main;
