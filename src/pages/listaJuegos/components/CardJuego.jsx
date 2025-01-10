import React from "react";
import "./cardJuego.css";
import EtiquetasCard from "./EtiquetasCard";

const CardJuego = ({
  juegoProp,
  setListaJuegosPedidoProp,
  listaJuegosPedidoProp,
  setContadorJuegosPedidoProp,
  borrarJuego,
}) => {
  function agregarJuego() {
    console.log("el boton funciona!");
    let listaAux = [...listaJuegosPedidoProp];
    const aniadirJuego = {
      id: juegoProp.id,
      juego: juegoProp.nombre,
    };
    listaAux.push(aniadirJuego);
    setListaJuegosPedidoProp(listaAux);
    console.log(listaJuegosPedidoProp);
    console.log(juegoProp)
    setContadorJuegosPedidoProp(listaAux.length);
    localStorage.setItem('Pedido', JSON.stringify(listaAux))
  }

  return (
    <>
      <div className="cardContainer d-flex border border-secondary">
        <div className="imgCardContainer">
          <img className="cardImg" src={juegoProp.img} alt="" />
        </div>
        <div className="cardInfo text-center d-flex flex-column justify-content-between w-100">
          <div>
            <p className="mb-0 mt-1">{juegoProp.nombre}</p>
          </div>
          <div className="d-flex justify-content-center">
            {juegoProp.etiquetas.map((etiqueta) => (
              <EtiquetasCard etiquetaProp={etiqueta}></EtiquetasCard>
            ))}
          </div>
          {listaJuegosPedidoProp.includes(listaJuegosPedidoProp.find((juego) => juego.id === juegoProp.id)) ? (
            <button className="btnCard" onClick={() => borrarJuego(listaJuegosPedidoProp.find((juego) => juego.id === juegoProp.id))}>
              Borrar <i className="bi bi-trash text-danger"></i>
            </button>
          ) : (
            <button className="btnCard" onClick={agregarJuego}>
              Agregar <i class="bi bi-plus-circle"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CardJuego;
