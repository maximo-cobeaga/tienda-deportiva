import React from 'react'

function ProductCard({prodId, prodI, prodT}) {

    return (
    <div className='productCard'>
        <h3>{prodT}</h3>
        <img src={prodI} alt={prodId} height="250px" />
        <p>$1000</p>
        <button>
          Agregar al carrito
        </button>
    </div>
  )
}

export default ProductCard