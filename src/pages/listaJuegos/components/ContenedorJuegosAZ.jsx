import React from "react";
import "./contenedorJuegos.css";
import CardJuego from "./CardJuego";

const ContenedorJuegosAZ = ({
  grupoProp,
  juegosAZProp,
  setListaJuegosPedidoProp,
  listaJuegosPedidoProp,
  setContadorJuegosPedidoProp
}) => {
  return (
    <div className="mb-5">
      <h3>{grupoProp}</h3>
      <div className="containerCategory d-flex pb-3 gap-3 gap-md-0">
        {Array.from({ length: Math.ceil(juegosAZProp.length / 3) }, (_, i) => (
          <div
            className="grupoJuegos d-flex flex-column pb-3 gap-2 gap-md-0"
            key={i}
          >
            {juegosAZProp.slice(i * 3, i * 3 + 3).map((juego) => (
              <CardJuego
                key={juego.id}
                juegoProp={juego}
                setListaJuegosPedidoProp={setListaJuegosPedidoProp}
                listaJuegosPedidoProp={listaJuegosPedidoProp}
                setContadorJuegosPedidoProp={setContadorJuegosPedidoProp}
              ></CardJuego>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContenedorJuegosAZ;
