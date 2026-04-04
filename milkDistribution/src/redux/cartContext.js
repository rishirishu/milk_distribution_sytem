import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const saved = await AsyncStorage.getItem("cart");
      if (saved) setCartItems(JSON.parse(saved));
    };
    loadCart();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => setCartItems((prev) => [...prev, product]);
  const removeFromCart = id => setCartItems((prev) => prev.filter((item) => item.id !== id));
  const handleIncrease = id =>setCartItems((prev) => prev.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
  const handleDecrease = id => setCartItems((prev) => prev.map(i => i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i));

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,handleIncrease,handleDecrease }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
