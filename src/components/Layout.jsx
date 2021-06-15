import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <article className="grid-container">
      <header>
        <Header />
        {children}
      </header>
    </article>
  );
};

export default Layout;
