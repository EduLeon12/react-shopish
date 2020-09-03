import React from "react";
import ItemList from "./ItemList";
import Intro from "./Intro";
import About from "./About";

function Home({ greeting }) {
  return (
    <main className="App-header bg-white mx-auto">
      <Intro />
      <h2 className="text-black items-left ">Shop</h2>
      <ItemList />
      <About />
    </main>
  );
}
export default Home;
