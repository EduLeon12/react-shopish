import React from "react";
import * as firebase from "firebase/app";
import { getFirestore } from "../firebase";
import { useCartContext } from "../CartContext";
import logo from "../logo.svg";

export default function Checkout() {
  const { cart, subTotal } = useCartContext();
  const [loading, setLoading] = React.useState(false);
  const [order, setOrder] = React.useState();
  const [error, setError] = React.useState(null);
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();

  function handleOrderSubmit() {
    setLoading(true);

    const db = getFirestore();
    const orders = db.collection("orders");

    const userInfo = {
      nombre: name,
      correo: email,
      telefono: phone,
    };

    const newOrder = {
      buyer: userInfo,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      totalPrice: subTotal,
    };
    console.log(newOrder);

    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrder(id);
      })
      .catch((err) => {
        setError(err.toString());
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  const nameChange = (event) => setName(event.target.value);
  const emailChange = (event) => setEmail(event.target.value);
  const phoneChange = (event) => setPhone(event.target.value);

  return order ? (
    <div>
      <h1 className="m-4">
        {" "}
        Felicitaciones por tu compra!! <strong>{name}</strong>
      </h1>{" "}
      <h1 className="m-4">
        {" "}
        Tu numero de orden es
        <strong>{order}</strong>
      </h1>{" "}
    </div>
  ) : (
    <div className="container flex  items-center bg-white m-4">
      <form className=" container flex flex-col items-center">
        <label htmlFor="name" className="text-base text-black w-1/2">
          {" "}
          Nombre Completo{" "}
        </label>
        <input
          id="name"
          onChange={nameChange}
          className="border rounded border-black max-w-sm"
        />
        <label htmlFor="email" className="text-base text-black w-1/2">
          {" "}
          Email{" "}
        </label>
        <input
          id="email"
          type="email"
          onChange={emailChange}
          className="border rounded border-black max-w-sm"
        />
        <label htmlFor="telefono" className="text-base text-black">
          {" "}
          Telefono{" "}
        </label>
        <input
          id="telefono"
          type="tel"
          onChange={phoneChange}
          className="border rounded border-black max-w-sm"
        />
        <h1 className="text-base text-black">Total: {subTotal}$ </h1>
        {loading ? (
          <div>
            <img src={logo} className="App-logo w-12 h-12 " alt="logo" />
            <h4>Loading...</h4>
          </div>
        ) : (
          <button
            onClick={handleOrderSubmit}
            className="shadow  bg-gray-600 text-base w-auto m-2 items-center text-center hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded  "
          >
            Comprar
          </button>
        )}
      </form>
      {error && <h1 className="text-red-500">ERROR {error}</h1>}
    </div>
  );
}
