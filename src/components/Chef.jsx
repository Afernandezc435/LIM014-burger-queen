import React, { useState, useEffect } from "react";
import db from "../firebase/config";
import ChefOrder from "./ChefOrder";

const Chef = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    db.collection("orders")
      .get()
      .then((snap) => {
        const documents = [];

        snap.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        setOrders(documents.filter((doc) => doc.status === "pending"));
        console.log(documents);
      });
  }, []);

  return (
    <section>
      <section className="cardsContainer">
        {orders.map((order) => (
          <ChefOrder key={order.id} order={order} />
        ))}
      </section>
      <p>
        <a href="/" className="btnExit">
          Exit
        </a>
      </p>
    </section>
  );
};

export default Chef;
