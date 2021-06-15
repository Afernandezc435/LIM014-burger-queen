import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src="./img/logoBQ.png" alt="Logo" width="120px" />
      <nav className="navHeader">
        <ul>
          <li>
            <NavLink to="/" exact={true}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/waiter">Nueva Orden</NavLink>
          </li>
          <li>
            <NavLink to="/waiterOrder">Ordenes por entregar</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
