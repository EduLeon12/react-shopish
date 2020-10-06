import React from "react";
import Item from "./Item";
import logo from "../logo.svg";
import { getFirestore } from "../firebase";
import Filter from "./Filter";
import { useLocation } from "react-router-dom";

export default function ItemList() {
  let query = useQuery();
  const filter = query.get("procesador");
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  React.useEffect(() => {
    const dataBase = getFirestore();
    const itemCollection = filter
      ? dataBase.collection("items").where("procesador", "==", filter)
      : dataBase.collection("items");

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results");
        }
        setItems(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [filter]);

  return loading ? (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h4>Loading...</h4>
    </div>
  ) : (
    <>
      <Filter />
      <ul className="container bg-white p-6 flex flex-wrap m-auto">
        {items.map((item) => (
          <li className="bg-gray-100 flex mx-auto " key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
