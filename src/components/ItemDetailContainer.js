import React from "react";
import ItemDetail from "./ItemDetail";
import logo from "../logo.svg";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

export default function ItemDetailContainer() {
  const params = useParams();
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const dataBase = getFirestore();
    const itemRef = dataBase.collection("items").doc(params.id);

    itemRef
      .get()
      .then((doc) => {
        if (!doc.exist) {
          console.log("No results");
        }
        setItem({ ...doc.data(), id: doc.id });
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  return loading ? (
    <div className=" container ml-60 w-full justify-center">
      <img
        src={logo}
        className="container ml-12 App-logo justify-center   "
        alt="logo"
      />
      <h4>Loading...</h4>
    </div>
  ) : (
    <ItemDetail item={item} />
  );
}
