import React from "react";
import logo from "../logo.svg";

function Home({ greeting }) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{greeting}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        react
      </a>
    </header>
  );
}
export default Home;
