import React from "react";
import ItemCount from "./ItemCount";

export default function Item({ item }) {
  const { name, description, price, src } = item;
  return (
    <div className="container bg-gray-900   p-6 flex flex-col m-auto">
      <div className="w-full">imagen</div>
      <div className="flex justify-between items-center py-2 ">
        <h1 className="mx-auto">{name}</h1>
        <p className="mx-auto">{description}</p>
        <span className="mx-auto">{price}</span>
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
