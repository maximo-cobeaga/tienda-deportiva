import React from "react";

function Nav() {
  return (
    <header className="navBar">
      <div className="navBar__conteiner">
        <h1>
          Tienda <span>deportes</span>
        </h1>

        <div>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
          <a href="#">Carrito</a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
