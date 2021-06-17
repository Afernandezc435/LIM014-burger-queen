import React from "react";
/* import { NavLink } from "react-router-dom"; */
import "../css/App.css";
import Mozo from "./logos/mozo";
import Cocina from "./logos/cocina";
import Icon from "./logos/logo";

const Home = () => {
  return (
    <div>
      <div className="form-container">
        <Icon className="logoBQ" />
        <form className="responsive">
          <div className="control">
            <Mozo />
            <p>
              <a href="/waiter" className="buttonHome">
                Mozo
              </a>
            </p>
          </div>
          <div className="control">
            <Cocina />
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
