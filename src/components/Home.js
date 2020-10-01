import React from "react";

import Intro from "./Intro";

import Sections from "./Sections";

function Home({ greeting }) {
  return (
    <main className="App-header bg-black mx-auto">
      <Intro />
      <Sections />
    </main>
  );
}
export default Home;
