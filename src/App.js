import React from "react";
import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home greeting="Bienvenidos a mi ecommerce" />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
