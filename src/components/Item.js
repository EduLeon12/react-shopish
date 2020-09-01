import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { name, price, id, src } = item;
  return (
    <div className=" bg-gray-100  p-6 flex flex-col my-auto mx-1">
      <img className="h-24 w-auto" src={src} alt=""></img>
      <div className="flex justify-between items-center py-2  ">
        <h1 className="mx-1 text-black">{name}</h1>
        <span className="mx-1 text-black">{price}</span>
      </div>
      <Link to={`/items/${id}`}>
        <button className="shadow bg-gray-600 text-base w-auto ml-auto mr-auto items-center text-center hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}
