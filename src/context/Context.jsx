import { useState, useEffect, createContext } from "react";
import { products as data } from "../products";
import React from "react";

export const ListContext = createContext();

export function ListContextProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);


  const [count, setCount] = useState(0)
  const [carrito, setCarrito] = useState([])
  function addCart(id, title, img){
    setCarrito({
      id,
      title,
      img
    })
  }



  return (
    <ListContext.Provider value={{products, addCart, count, setCount, setCarrito, carrito}}>
      {props.children}
    </ListContext.Provider>
  )
}

