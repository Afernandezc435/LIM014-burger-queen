import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Products from "./Products";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import db from "../firebase/config";

const Cart = ({ cart, setCart }) => {
  const itemsPrice = cart.reduce((a, c) => a + c.quantity * c.price, 0);
  const inputName = useRef();

  const deleteListProduct = (id) => {
    const existProducts = cart.find((product) => product.id === id);
    if (existProducts.quantity === 1) {
      setCart(cart.filter((product) => product.id !== id));
    } else {
      setCart(
        cart.map((product) =>
          product.id === id
            ? { ...existProducts, quantity: existProducts.quantity - 1 }
            : product
        )
      );
    }
  };

  const sendOrder = (evt) => {
    evt.preventDefault();
    let order = {};
    order.name = inputName.current.value || "sinNombre";
    order.products = cart;
    order.created_at = new Date();
    order.status = "pending";

    db.collection("orders")
      .add(order)
      .then(() => {
        inputName.current.value = "";
        setCart([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function cancelOrder(evt) {
    evt.preventDefault();
    inputName.current.value = "";
    setCart([]);
  }

  return (
    <section>
      <h1>Orden</h1>
      <form type="submit" action="">
        <span>Cliente:</span>
        <input type="text" ref={inputName} />
        <table>
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          {cart.length === 0 ? (
            <td>Cart Is Empty</td>
          ) : (
            cart.map((product) => (
              <tbody>
                <tr>
                  <td> {product.quantity} </td>
                  <td>
                    <Products
                      key={product.id}
                      product={product}
                      cart={cart}
                      setCart={setCart}
                    />
                  </td>
                  <td> ${product.price}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => deleteListProduct(product.id)}
                    />
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </table>
        <hr></hr>
        <tfoot>
          <tr className="result">
            <td colspan="2"> Total</td>
            <td>
              {" "}
              <strong>${parseFloat(itemsPrice).toFixed(2)}</strong>{" "}
            </td>
          </tr>
        </tfoot>
        <hr></hr>
        <button onClick={cancelOrder} className="btnCancel">
          Cancelar
        </button>
        <button onClick={sendOrder} className="btnSend">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Cart;
