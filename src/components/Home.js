import React from "react";
import ItemList from "./ItemList";

function Home({ greeting }) {
  return (
    <main className="App-header">
      <p>{greeting}</p>
      <ItemList />
    </main>
  );
}
export default Home;
