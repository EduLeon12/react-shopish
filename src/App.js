import React from "react";
import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./CartContext";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home greeting="Bienvenidos a mi ecommerce" />
              <ItemList />
            </Route>
            <Route path="/items/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/contactform">
              <ContactForm />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
