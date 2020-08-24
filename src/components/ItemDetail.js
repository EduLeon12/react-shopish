import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const { name, description, price, src } = item;
  return (
    <div className=" bg-gray-900  p-6 flex flex-col my-auto mx-1">
      <img src={src} className="w-full" alt="Imagen :)" />
      <div className="flex justify-between items-center py-2  ">
        <h1 className="mx-1">{name}</h1>
        <p className="mx-1">{description}</p>
        <span className="mx-1">{price}</span>
      </div>
      <ItemCount
        initial={0}
        min={0}
        max={5}
        onAdd={(count) => console.log("Got", count, name, "in cart")}
      />
    </div>
  );
}
