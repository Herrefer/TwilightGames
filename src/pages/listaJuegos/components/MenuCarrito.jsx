import React from "react";
import "./menuCarrito.css";
import { Link } from "react-router-dom";

const MenuCarrito = ({ contadorJuegosPedidoProp }) => {
  return (
    <>
      <div className="pedidoContainer position-fixed bottom-0 d-flex justify-content-between align-items-center">
        <button className="botonMostrarListado rounded-end-pill">
          <p className="mb-0 fs-5">X{contadorJuegosPedidoProp} JUEGOS</p>
        </button>
        <div className="d-flex flex-column align-items-center">
          <p className="m-0 fs-5">$5500</p>
          <p className="m-0 fs-6 fw-light">precio final</p>
        </div>
        <Link className="botonPedidoContainer" to={"/formulario"}>
          <button className="botonPedido rounded-start-pill fs-5">
            Al pedido
          </button>
        </Link>
      </div>
    </>
  );
};

export default MenuCarrito;
