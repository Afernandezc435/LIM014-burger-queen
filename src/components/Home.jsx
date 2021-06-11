import React from "react";
import { NavLink } from "react-router-dom";
import "../css/App.css";

const Home = () => {
  return (
    <section className="App">
      <img src="./img/logoBQ.png" alt="logo" />
      <section className="containerHome">
        <section className="marginHome">
          <img src="./img/mozo.png" className="logo" alt="logo" />
          <NavLink to="/waiter" className="buttonHome">
            Mozo
          </NavLink>
        </section>
        <section className="marginHome">
          <img src="./img/cocina.png" className="logo" alt="logo" />
          <NavLink to="/chef" className="buttonHome">
            Chef
          </NavLink>
        </section>
      </section>
    </section>
  );
};

export default Home;