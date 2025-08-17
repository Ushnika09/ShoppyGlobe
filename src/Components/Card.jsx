import React from "react";
import star from "../assets/star.png";
import cart from "../assets/cart.png";

function Card({ pdtArr }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem] p-[1.5rem] ">
      {pdtArr.map((pdt, i) => {
        return (
          <div
            key={i}
            className="shadow-2xl border rounded-2xl overflow-hidden flex flex-col"
          >
            <img className="h-[15rem] w-full " src={pdt.thumbnail} alt="" />
            <div className="p-[1rem]">
              <h1 className="font-semibold py-4">{pdt.title}</h1>
              <h1>{pdt.description}</h1>
              <h1 className="flex gap-1.5 items-center">
                <img className="h-[1rem]" src={star} alt="" />
                {pdt.rating}
              </h1>
              <h1>
                $
                {(
                  pdt.price -
                  (pdt.price * pdt.discountPercentage) / 100
                ).toFixed(2)}
                <span className="text-green-600 font-semibold">
                  ${pdt.price}
                </span>
              </h1>
                <h1>{pdt.brand ? `By ${pdt.brand}` :""}</h1>
                

            </div>
            <button className="flex gap-1.5 justify-center items-center bg-[#00BFFF] text-white m-auto mx-4  py-2 rounded-2xl shadow shrink-0 mb-[1rem]">
                    <img className="h-[1rem]" src={cart} alt=""/>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
