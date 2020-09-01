import React from "react";
import Item from "./Item";
import logo from "../logo.svg";
import { products } from "../db";

function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

export default function ItemList() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h4>Loading...</h4>
    </div>
  ) : (
    <ul className="container bg-white p-6 flex flex-wrap m-auto">
      {products.map((item) => (
        <li className="bg-gray-100 flex mx-auto " key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
}
