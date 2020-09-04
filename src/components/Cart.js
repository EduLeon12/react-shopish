import React from "react";
import { useCartContext } from "../CartContext";
import emptyCart from "../emptyCart.png";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, cleanCart, quantity } = useCartContext();

  const subTotal = cart.reduce((total, cartItem) => {
    return cartItem.quantity * cartItem.item.price + total;
  }, 0);

  return cart.length > 0 ? (
    <div className="container">
      <ul className="divide-y">
        {cart.map((i) => (
          <li className="flex flex-row w-full m-auto" key={i.item.id}>
            <div className="m-2 w-1/3">{i.item.name}</div>
            <div className="m-2 w-1/3">{i.quantity}</div>
            <div className="m-2 w-1/3">{i.item.price * i.quantity}$</div>
          </li>
        ))}
      </ul>
      <div className="ml-auto border-t">
        Subtotal ({quantity} Items): {subTotal}$
      </div>
      <div className=" flex flex-wrap  justify-center">
        <button
          className="  shadow bg-gray-600 text-base w-auto m-2 items-center text-center hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
          onClick={() => cleanCart()}
        >
          Clean Cart
        </button>
        <button className="  shadow bg-gray-600 text-base w-auto m-2 items-center text-center hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ">
          Checkout
        </button>
      </div>
    </div>
  ) : (
    <div className="container flex flex-col justify-center items-center  ">
      <img src={emptyCart} alt="" className="h-36  " />
      <h1 className="text-xl">Your Cart is empty </h1>
      <Link to="/">
        <button className=" shadow bg-gray-600 text-base w-auto ml-auto mr-auto items-center text-center hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-2">
          Go to Home
        </button>
      </Link>
    </div>
  );
}
