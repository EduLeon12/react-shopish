import React, { useContext } from "react";

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = React.useState([]);

  function addItem(newItem) {
    const currentItemIndex = cart.findIndex(
      (cartItem) => newItem.item.id === cartItem.item.id
    );
    // If item exist , we add new value
    if (currentItemIndex !== -1) {
      const c = [...cart];
      c[currentItemIndex].quantity = newItem.quantity;
      setCart(c);
    } else {
      // New item in town
      const c = [...cart, newItem];
      setCart(c);
    }
  }

  function cleanCart() {
    setCart([]);
  }
  const quantity = cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, quantity, cleanCart }}>
      {children}
    </CartContext.Provider>
  );
}
