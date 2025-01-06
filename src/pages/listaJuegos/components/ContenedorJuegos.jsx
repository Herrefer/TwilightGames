import React from "react";
import "./contenedorJuegos.css";
import CardJuego from "./CardJuego";

const ContenedorJuegos = ({ categoriaProp, listaJuegosProp }) => {
  const juegosFiltrados = listaJuegosProp.filter(
    (juego) => juego.categoria === categoriaProp
  );
  console.log(juegosFiltrados);
  return (
    <div className="mb-5">
      <h2 className="fs-2">{categoriaProp}</h2>
      <div className="containerCategory d-flex pb-3 gap-3 gap-md-0">
        {Array.from(
          { length: Math.ceil(juegosFiltrados.length / 3) },
          (_, i) => (
            <div
              className="grupoJuegos d-flex flex-column pb-3 gap-2 gap-md-0"
              key={i}
            >
              {juegosFiltrados.slice(i * 3, i * 3 + 3).map((juego) => (
                <CardJuego key={juego.id} juegoProp={juego}></CardJuego>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ContenedorJuegos;
