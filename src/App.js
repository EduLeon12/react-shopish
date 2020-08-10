import React from "react";
import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
  <Home greeting= "Bienvenidos a mi ecommerce" />
    </div>
  );
}
export default App;
