import React from "react";
import { useContext } from "react";
import { ListContext } from "../../../../context/Context";

function ProductCard({ prodId, prodI, prodT }) {
  const { addCart, count, setCount } = useContext(ListContext);

  return (
    <div className="productCard">
      <h3>{prodT}</h3>
      <img src={prodI} alt={prodId} height="250px" />
      <p>$1000</p>
      <button
        onClick={() => {
          setCount(count + 1);
          addCart({prodId}, {prodT}, {prodI})
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
