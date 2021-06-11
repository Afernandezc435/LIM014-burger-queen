import React from "react";
import db from "../firebase/config";

const ChefOrder = ({ order }) => {
  const { id, name, products } = order;

  function finish(evt) {
    evt.preventDefault();
    evt.target.style.display = "none";
    evt.target.parentNode.parentNode.parentNode.parentNode.style.display =
      "none";
    db.collection("orders")
      .doc(id)
      .update({
        status: "delivered",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section className="card">
      <section id={id}>
        <h5>Cliente: {name}</h5>
        <table>
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td> {product.quantity} </td>
                <td>{product.name}</td>
                <td> ${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr></hr>
        <section className="cards">
          <section className="temporize">
            <button onClick={finish} className="btnStop">
              Entregado
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ChefOrder;
