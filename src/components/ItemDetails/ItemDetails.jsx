import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useLoaderData, useParams } from "react-router-dom";
import Cards from "../Cards/Cards";

const ItemDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const [taqiyah, setTaqiyah] = useState([])
  // console.log(taqiyah)
  const [reCard, setReCard] = useState([])
  // console.log(reCard)

  const item = data.find((item) => item.product_id === product_id);
  // console.log(item)
  const cate = item.category
  // console.log(cate)
  const filterByCat = [...taqiyah].filter(taqiya => taqiya.category === cate)
  console.log(filterByCat)

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

  useEffect(() =>{
    fetch("../../../public/taqiyah.json")
      .then((res) => res.json())
      .then((data) => setTaqiyah(data));
  }, [])

  return (
    <div>
      <div className="p-2 mx-auto pt-4 w-5/6">
        <div className="hero mx-auto rounded-lg">
          <div className="bg-transparent rounded-lg">
            <div className="border card card-side bg-base-100 pb-10  ">
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
                  <h2 className="text-lg font-semibold">Raring</h2>
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
                <div className="flex gap-3">
                  <button
                    // onClick={() => handleFavorite(item)}
                    className="btn rounded-full text-lg text-white bg-blue-400"
                  >
                    Add to Card
                    <HiOutlineShoppingCart />
                  </button>
                  <button
                    // onClick={() => handleWish(item)}
                    className="btn rounded-full"
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
      <div>
        <div>
          {/* related products... */}
        <h2 className="text-base font-semibold p-6">Related products</h2>
          <div className='w-10/12 mx-auto grid grid-cols-5 gap-3'>
            {/* <Outlet></Outlet> */}{
              filterByCat.map((item) =><Cards id={item.product_id} item={item}></Cards>)
            }
          {/* <Cards item={item}></Cards> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
