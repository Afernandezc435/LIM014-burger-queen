import React from "react";
/* import { NavLink } from "react-router-dom"; */
import "../css/App.css";

const Home = () => {
  return (
    <div>
      <div className="form-container">
        <img
          className="logoBQ"
          src="./img/logoBQ.png"
          alt="logo"
          width="100%"
        />
        <form className="responsive">
          <div className="control">
            <img className="btn" src="./img/mozo.png" alt="logo" width="100%" />
            <p>
              <a href="/waiter" className="buttonHome">
                Mozo
              </a>
            </p>
          </div>
          <div className="control">
            <img
              className="btn"
              src="./img/cocina.png"
              alt="logo"
              width="100%"
            />
            <p>
              <a href="/chef" className="buttonHome">
                Chef
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
