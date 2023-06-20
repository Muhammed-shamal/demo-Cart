import { createContext, useState } from "react";

export const CartContext = createContext(null);

export default function AddToCart({ children }) {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
}
