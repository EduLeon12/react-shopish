import React from "react";
import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home greeting="Bienvenidos a mi ecommerce" />
          </Route>
          <Route path="/items/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/items">
            <ItemList />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
