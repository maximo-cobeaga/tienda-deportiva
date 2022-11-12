import { useState, useEffect, createContext } from "react";
import { products as data } from "../products";
import React from "react";

export const ListContext = createContext();

export function ListContextProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);


  return (
    <ListContext.Provider value={{products}}>
      {props.children}
    </ListContext.Provider>
  )
}

