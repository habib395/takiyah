import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  const { product_id, product_title, product_image, price, category } = item;
  console.log(item);
  return (
    <div>
      <Link to={`/item/${product_id}`}>
        <div
          className="card bg-transparent border border-gray-300 rounded-lg overflow-hidden 
                transition-transform duration-300 hover:scale-105 hover:shadow-lg shadow hover:border-blue-400
                h-80"
        >
          <figure className="px-10 pt-10">
            <img
              src={product_image}
              alt="Product"
              className="rounded-xl transition-transform duration-300 hover:scale-110 h-32 object-contain"
            />
          </figure>
          <div className="card-body text-center flex flex-col justify-between">
            <h2 className="sm:font-semibold text-xs text-gray-600">
              {category}
            </h2>
            <h2 className="md:text-base sm:font-bold text-gray-800">
              {product_title}
            </h2>
            <div className="flex items-center justify-center gap-3">
              <h6 className="md:text-xl text-blue-500 font-semibold">
                Price: $ {price}
              </h6>
              <h6 className="md:text-sm text-gray-400">
                <s>Price: ${price + price * 0.3}</s>
              </h6>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
