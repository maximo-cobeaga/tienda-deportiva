import React, {useContext} from "react";
import { ListContext } from '../../../context/Context' 


function Nav() {

  const {count} = useContext(ListContext)

  return (
    <header className="navBar">
      <div className="navBar__conteiner">
        <h1>
          Tienda <span>deportes</span>
        </h1>

        <div className="enlaces">
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
          <button className="carrito-logo">Carrito {count > 0 && `${count}`}</button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
