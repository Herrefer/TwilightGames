import React, { useState } from "react";
import "./menuCarrito.css";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const MenuCarrito = ({
  contadorJuegosPedidoProp,
  listaJuegosPedidoProp,
  setListaJuegosPedidoProp,
  setContadorJuegosPedidoProp
}) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleClose = () => setMostrarModal(false);
  const handleShow = () => setMostrarModal(true);

  const borrarJuego = (id) =>{
    let listaPedidoAux = [...listaJuegosPedidoProp];
    console.log(id)
    console.log(listaPedidoAux)
    const juegoEncontrado = listaPedidoAux.indexOf(id)
    console.log(juegoEncontrado)
    listaPedidoAux.splice(juegoEncontrado, 1)
    console.log(listaPedidoAux)
    setListaJuegosPedidoProp(listaPedidoAux)
    setContadorJuegosPedidoProp(listaPedidoAux.length)
  }

  return (
    <>
      <div className="pedidoContainer position-fixed bottom-0 d-flex justify-content-between align-items-center">
        <button
          className="botonMostrarListado rounded-end-pill"
          onClick={handleShow}
        >
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
      <Modal show={mostrarModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" centered>
            Tu listado
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalListadoDeJuegos">
          {listaJuegosPedidoProp.length <= 0 ? (
            <p className="text-center">No hay juegos en tu lista</p>
          ) : (
            <div>
              {listaJuegosPedidoProp.map((juego) => (
                <div className="d-flex justify-content-between my-1 border-bottom border-secondary">
                  <div className="p-1" key={juego.id}>
                    {juego.juego}
                  </div>
                  <button className="mb-1 botonEliminarDeLista" onClick={() => borrarJuego(juego)}>
                    <i className="bi bi-trash text-danger fs-5"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MenuCarrito;
