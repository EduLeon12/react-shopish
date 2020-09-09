import React from "react";
import ItemCount from "./ItemCount";
import { useCartContext } from "../CartContext";

export default function ItemDetail({ item }) {
  const { name, description, image, price, stock, about } = item;
  const { cart, addItem } = useCartContext();
  const cartEntry = cart.find((cartItem) => item.id === cartItem.item.id);

  return (
    <div className="container bg-gray-100 p-6 my-auto mx-auto w-1/2 h-2/3 ">
      <img src={image} alt="" className="w-full h-auto items-center" />
      <div className="flex flex-wrap justify-between items-center py-2">
        <h1 className="mx-1">{name}</h1>
        <p className="mx-1">{description}</p>
        <span className="mx-1">{price}$</span>
      </div>
      <div className="text-sm text-black">
        <p className="text-justify"> {about}</p>
      </div>
      <ItemCount
        initial={cartEntry ? cartEntry.quantity : 0}
        min={0}
        max={stock}
        onAdd={(count) => addItem({ item, quantity: count })}
      />
    </div>
  );
}
