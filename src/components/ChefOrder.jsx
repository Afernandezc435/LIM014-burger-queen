import React, { useState, useEffect } from "react";
import db from "../firebase/config";

const ChefOrder = ({ order }) => {
  const { id, name, products } = order;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [timer, setTimer] = useState("00:00:00");
  const [isActive, setIsActive] = useState(false);
  const [textButton, setTextButton] = useState("Iniciar");

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        let s, m, h, hAux, mAux, sAux;
        s = seconds + 1;
        m = minutes;
        h = hours;

        if (s >= 60) {
          s = 0;
          m++;
        }
        if (m >= 60) {
          m = 0;
          h++;
        }

        setSeconds(s);
        setMinutes(m);
        setHours(h);

        if (s < 10) {
          sAux = "0" + parseInt(s);
        } else {
          sAux = parseInt(s);
        }
        if (m < 10) {
          mAux = "0" + parseInt(m);
        } else {
          mAux = parseInt(m);
        }
        if (h < 10) {
          hAux = "0" + parseInt(h);
        } else {
          hAux = parseInt(h);
        }

        setTimer(hAux + ":" + mAux + ":" + sAux);
      }, 1000); // cada segundo se ejecuta esta funcion
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, hours]); //active para recupeerar el estado de si está activo

  function preparation(evt) {
    evt.preventDefault();
    switch (textButton) {
      case "Iniciar":
        setIsActive(true);
        setTextButton("Terminar");
        break;
      case "Terminar":
        setIsActive(false);
        setTextButton("Finalizado");
        db.collection("orders")
          .doc(id)
          .update({
            status: "completed",
            order_time: timer,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        evt.target.style.display = "none";
        evt.target.parentNode.parentNode.parentNode.parentNode.style.display =
          "none";
        break;
      default:
    }
  }

  return (
    <section className="card">
      <section>
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
          <section className="temporize">
            <h2 id="crono">{timer}</h2>
            <button onClick={preparation} className="btnStop">
              {textButton}
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ChefOrder;
