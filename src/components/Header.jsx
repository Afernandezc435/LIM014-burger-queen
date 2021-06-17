import React from "react";
import { NavLink } from "react-router-dom";
import ImageProject from "./image";

const Header = () => {
  const img = [{ id: "logo" }];
  return (
    <header className="header">
      {img.map((image) => {
        return <ImageProject key={image} nombre={image.id} />;
      })}
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
