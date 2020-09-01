import React from "react";
import ItemList from "./ItemList";
import Intro from "./Intro";
import About from "./About";

function Home({ greeting }) {
  return (
    <main className="App-header bg-white mx-auto">
      <Intro />
      <ItemList />
      <About />
    </main>
  );
}
export default Home;
