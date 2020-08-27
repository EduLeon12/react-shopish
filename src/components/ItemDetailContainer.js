import React from "react";
import ItemDetail from "./ItemDetail";
import logo from "../logo.svg";
import image from "../macbook.jpg";

function getProductById() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(product);
    }, 3000);
  });
}

export default function ItemList() {
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  import image from "./macbook.jpg";

  React.useEffect(() => {
    getProductById().then((result) => {
      setItem(result);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h4>Loading...</h4>
    </div>
  ) : (
    <ItemDetail item={item} />
  );
}
const product = {
  id: 0,
  src: image,
  name: "MacBook Pro 1",
  description: "I7 3.40gz",
  price: "700$",
};
