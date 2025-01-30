import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cards from "../Cards/Cards";

const ItemCard = () => {

    const data = useLoaderData()
    const { Items } = useParams()
    const [itemes, setItemes] = useState([])

    useEffect(()=> {
        if(Items === "All Products"){
            setItemes(data)
        }else if(!Items){
            setItemes(data.slice(0, 9))
        }else if(Items === "others"){
            setItemes([])
        }else{
            const filterByItem = [...data].filter(taqiya => taqiya.category === Items)
            setItemes(filterByItem)
        }
    }, [Items, data])


  return (
    <>
      <div className="grid col-span-4 gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {itemes?.length > 0 ? (
          itemes.map((item) => (
            <Cards key={item.product_id} item={item}></Cards>
          ))
        ) : (
          <div className="w-1/2 sm:col-span-4 mx-auto sm:text-5xl text-center flex justify-center items-center bg-blue-300 py-14 sm:py-10 rounded-full my-10">
            {Items === "Others" ? "No Data Found." : "No items found."}
          </div>
        )}
      </div>
    </>
  );
};

export default ItemCard;
