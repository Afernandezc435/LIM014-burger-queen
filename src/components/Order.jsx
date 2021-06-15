import React from "react";
import db from "../firebase/config";

const ChefOrder = ({ order }) => {
  const { id, name, products, order_time } = order;

  async function finish(evt) {
    evt.preventDefault();
    evt.target.style.display = "none";
    evt.target.parentNode.parentNode.parentNode.parentNode.style.display =
      "none";
    await db.collection("orders").doc(id).update({
      status: "delivered",
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
              <tr key={product.id}>
                <td> {product.quantity} </td>
                <td>{product.name}</td>
                <td> ${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr></hr>
        <section>
          <section className="time">
            <span>Tiempo de preparación:</span>
            <span>{order_time}</span>
          </section>
          <section className="temporize">
            <button onClick={finish} className="btnStop" title="prueba">
              Entregado
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ChefOrder;
