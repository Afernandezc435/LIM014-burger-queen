import React from "react";
import { NavLink } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";

describe("App", () => {
  test("renders App component", () => {
    render(<Cart />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
describe("funcionalidades firebase", () => {
  test("Debería devolver categoria almuerzo al clickear  1", () => {
    render(<Cart />);
    expect([`Debería devolver categoria almuerzo al clickear  1`]).toBe([]);
  });
  test("Debería encontrar la funcion ClearOrder al clickear  1", () => {
    render(<Cart />);
    expect([`Debería encontrar la funcion ClearOrder al clickear  1`]).toBe([
      Function,
    ]);
  });
  test("se renderea correctamente el componente Btn", () => {
    render(<Cart />);
    expect(
      <button className="btn-item" onClick={[Function]}>
        HOLA
      </button>
    ).toBe([Function]);
  });
  test("se renderea correctamente el componente Navbar", () => {
    render(<Cart />);
    expect(
      <header>
        <nav className="menu-nav-row">
          <div className="menu-left-col">
            <img alt="logo" className="menu-icon" src="logo.png" />
          </div>
          <div className="menu-center-col">
            <ul className="menu-ul-row">
              <li className="menu-ul">
                <NavLink to="/">MENÚ</NavLink>
              </li>
              <li className="menu-ul">
                <NavLink to="/Kitchen">COCINA</NavLink>
              </li>
              <li className="menu-ul">
                <NavLink to="/OrdersReady">PEDIDOS LISTOS</NavLink>
              </li>
              <li className="menu-ul">
                <NavLink to="/Record">HISTORIAL</NavLink>
              </li>
            </ul>
          </div>
          <div className="menu-right-col" />
        </nav>
      </header>
    ).toBe([Function]);
  });
});
