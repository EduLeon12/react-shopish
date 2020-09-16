import React from "react";
import Cart from "./Cart";
import * as firebase from "firebase/app";
import { getFirestore } from "../firebase";
import { useCartContext } from "../CartContext";

export default function Checkout() {
  const { cart } = useCartContext();
  const [loading, setLoading] = React.useState(true);
  const [order, setOrder] = React.useState();
  const [error, setError] = React.useState();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();

  const total = Cart.subtotal;
  const db = getFirestore();
  const orders = db.collection("orders");

  const userInfo = {
    nombre: { name },
    correo: { email },
    telefono: { phone },
  };

  const newOrder = {
    buyer: userInfo,
    items: cart,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    totalPrice: total,
  };

  orders
    .add(newOrder)
    .then(({ id }) => {
      setOrder(id);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });

  const nameChange = (event) => setName(event.target.value);
  const emailChange = (event) => setEmail(event.target.value);
  const phoneChange = (event) => setPhone(event.target.value);
  return (
    <div className="container flex flex-col items-center bg-black">
      <form>
        <label htmlFor="name"> Nombre Completo </label>
        <input id="name" onChange={nameChange} />
        <label htmlFor="email"> Email </label>
        <input id="email" onChange={emailChange} />
        <label htmlFor="telefono"> Telefono </label>
        <input id="telefono" onChange={phoneChange} />
      </form>
      <h1>Total: {total}$ </h1>
      <button
        onClick={orders}
        className="shadow bg-gray-600 text-base w-auto m-2 items-center text-center hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded  "
      >
        Comprar
      </button>
    </div>
  );
}
