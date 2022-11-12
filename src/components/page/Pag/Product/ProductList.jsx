import React from "react";
import { ListContext } from "../../../../context/Context";
import { useContext } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const { products } = useContext(ListContext);

  return (
    <div className="productsList">
      <h2>Nuestro Productos</h2>
      <div className="lista contenedor">
        {products.map((prod) => (
        <ProductCard key={prod.id} prodId={prod.id} prodT={prod.title} prodI={prod.img} />
      ))}
      </div>
      
    </div>
  );
}

export default ProductList;
