import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
    const {product_id, product_title, product_image,  price } = item;
  return (
    <div className="card bg-transparent border">
      <figure className="px-10 pt-10">
        <img src={product_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="md:text-xl sm:font-bold">{product_title}</h2>
        <h6 className="md:text-xl sm:font-semibold">Price:${price}</h6>
        <div>
          <Link to={`/item/${product_id}`}>
            <button className="btn rounded-lg bg-blue-400 text-base text-white">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
