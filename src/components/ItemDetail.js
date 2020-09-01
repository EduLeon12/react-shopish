import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const { name, description, src, price, stock, about } = item;

  return (
    <div className=" bg-gray-100 p-6 my-auto mx-1 w-1/2 h-2/3 items-center content-center">
      <img src={src} alt="" className="w-full h-auto items-center" />
      <div className="flex flex-wrap justify-between items-center py-2">
        <h1 className="mx-1">{name}</h1>
        <p className="mx-1">{description}</p>
        <span className="mx-1">{price}</span>
      </div>
      <div className="text-sm text-black">
        <p className="text-justify"> {about}</p>
      </div>
      <ItemCount
        initial={0}
        min={0}
        max={stock}
        onAdd={(count) => console.log("Got", count, name, "in cart")}
      />
    </div>
  );
}
