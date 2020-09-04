import React from "react";
import ItemDetail from "./ItemDetail";
import logo from "../logo.svg";
import { useParams } from "react-router-dom";
import { products } from "../db";

function getProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id.toString() === id);
      resolve(product);
    }, 1000);
  });
}

export default function ItemDetailContainer() {
  const params = useParams();
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getProductById(params.id).then((result) => {
      setItem(result);
      setLoading(false);
    });
  }, [params.id]);

  return loading ? (
    <div className="container flex flex-col items-center justify-center">
      <img src={logo} className="App-logo " alt="logo" />
      <h4>Loading...</h4>
    </div>
  ) : (
    <ItemDetail item={item} />
  );
}
