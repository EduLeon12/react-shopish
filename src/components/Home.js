import React from "react";
import logo from "../logo.svg";
import ItemCount from "./ItemCount";

function Home({ greeting }) {
  return (
    <main className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{greeting}</p>
      <ItemCount
        initial={0}
        min={0}
        max={5}
        onAdd={(count) => console.log("Tienes de este producto:", count)}
      />
    </main>
  );
}
export default Home;
