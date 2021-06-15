import React, { Fragment, useState, useEffect } from "react";
import Product from "./Products";
import Cart from "./Cart";
import db from "../firebase/config";

const Menu = () => {
  const [Menu, setMenu] = useState([]);
  const [Type, setType] = useState("breakfast");

  useEffect(() => {
    db.collection("products")
      .get()
      .then((snap) => {
        const documents = [];
        snap.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        setMenu(documents.filter((doc) => doc.type === Type));
      });
  }, [Type]);

  const [cart, setCart] = useState([]);

  return (
    <section className="grid-container">
      <nav className="navbar">
        <button
          className="btnBreakFast"
          onClick={() => {
            setType("breakfast");
          }}
        >
          Desayuno
        </button>
        <button
          className="btnLuch"
          onClick={() => {
            setType("lunch");
          }}
        >
          Fuerte
        </button>
      </nav>
      <main className="main">
        <section>
          <Fragment>
            <section className="containerBox">
              <section className="cards">
                {Menu.filter((product) => product.type === Type).map(
                  (product) => (
                    <Product
                      key={product.id}
                      product={product}
                      cart={cart}
                      setCart={setCart}
                      Products={Menu}
                      img={product.img}
                    />
                  )
                )}
              </section>
            </section>
          </Fragment>
        </section>
      </main>
      <aside className="sidebar">
        <section className="aside">
          <Cart cart={cart} setCart={setCart} />
        </section>
      </aside>
    </section>
  );
};

export default Menu;
