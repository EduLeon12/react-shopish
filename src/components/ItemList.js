import React from "react";
import Item from "./Item";
import logo from "../logo.svg";

function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
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
    <ul className="container bg-gray-900  p-6 flex flex-col m-auto">
      {products.map((item) => (
        <li className="bg-gray-900 p-6 flex flex-col m-auto " key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
}
const products = [
  {
    id: 0,
    src: "./macbook.jpg",
    name: "MacBook Pro 1",
    description: "I7 3.40gz",
    price: "700$",
  },
  {
    id: 1,
    src: "./macbook.jpg",
    name: "MacBook Pro 2",
    description: "I7 3.40gz",
    price: "700$",
  },
  {
    id: 2,
    src: "./macbook.jpg",
    name: "MacBook Pro 3",
    description: "I7 3.40gz",
    price: "700$",
  },
  {
    id: 3,
    src: "./macbook.jpg",
    name: "MacBook Pro 4",
    description: "I7 3.40gz",
    price: "700$",
  },
  {
    id: 4,
    src: "./macbook.jpg",
    name: "MacBook Pro 5 ",
    description: "I7 3.40gz",
    price: "700$",
  },
  {
    id: 5,
    src: "./macbook.jpg",
    name: "MacBook Pro 6",
    description: "I7 3.40gz",
    price: "700$",
  },
  {
    id: 6,
    src: "./macbook.jpg",
    name: "MacBook Pro 7",
    description: "I7 3.40gz",
    price: "700$",
  },
  {
    id: 7,
    src: "./macbook.jpg",
    name: "MacBook Pro 8",
    description: "I7 3.40gz",
    price: "700$",
  },
];
