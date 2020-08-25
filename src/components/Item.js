import React from "react";

export default function Item({ item }) {
  const { name, description, price } = item;
  return (
    <div className=" bg-gray-900  p-6 flex flex-col my-auto mx-1">
      <div className="flex justify-between items-center py-2  ">
        <h1 className="mx-1">{name}</h1>
        <p className="mx-1">{description}</p>
        <span className="mx-1">{price}</span>
      </div>
    </div>
  );
}
