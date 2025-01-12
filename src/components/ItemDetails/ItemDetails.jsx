import React from "react";
import { FaHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useLoaderData, useParams } from "react-router-dom";

const ItemDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  // console.log(data)

  const item = data.find((item) => item.product_id === product_id);
  // console.log(item)

  const {
    product_id: currentId,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    brand,
    rating,
  } = item;

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="p-2 mx-auto pt-4 w-full">
        <div className="hero mx-auto rounded-lg">
          <div className="bg-transparent sm:w-2/3 rounded-lg">
            <div className="border sm:card card-side bg-transparent w-10/12 mx-auto pb-10  ">
              <figure>
                <img className="p-5 " src={product_image} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <h3 className="text-xl">Price: ${price}</h3>
                <div className="badge badge-outline bg-[#309C08]/10">
                  In stock
                </div>
                <p>{description}</p>
                <h2 className="text-lg font-semibold">Signification</h2>
                <p>1 {Specification[0]}</p>
                <p>2 {Specification[1]}</p>
                <p>3 {Specification[2]}</p>
                <p>4 {Specification[3]}</p>
                <div className="flex gap-3">
                  <h2 className="text-lg font-semibold">Rating</h2>
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div className="badge badge-outline bg-gray-200">
                    {rating}
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleFavorite(item)}
                    className="btn rounded-full text-sm text-white bg-blue-400"
                  >
                    Add to Card
                    <HiOutlineShoppingCart />
                  </button>
                  <button
                    // onClick={() => handleWish(item)}
                    // className={`btn rounded-full ${
                    //   isWishDisabled ? "bg-gray-300 cursor-not-allowed" : ""
                    // }`}
                    // disabled={isWishDisabled}
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
