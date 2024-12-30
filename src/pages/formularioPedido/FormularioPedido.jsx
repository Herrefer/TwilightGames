import React from "react";
import "./formularioPedido.css";
import { Button, Container, Form } from "react-bootstrap";

const FormularioPedido = () => {
  return (
    <>
      <Container fluid>
        <div className="mx-4">
          {/* aqui revisar si es mejor un margin 4 o 5 (o tal vez más pequeño) */}
          <div className="d-flex my-4">
            <a href="">
              <i className="bi bi-chevron-left fs-1 text-black"></i>
            </a>
            <p className="text-center flex-grow-1 fs-1"> Datos de contacto </p>
          </div>
        </div>
        <Form className="border p-4">
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Apellido y nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Perez Juan"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNumero">
            <Form.Label>Número de teléfono móvil</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Ej: 3811234567"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCorreo">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: juanperez@correo.com"
            ></Form.Control>
          </Form.Group>
          <div className="text-center">
            <Button variant="secondary" type="submit">
              Continuar al resumen <i class="bi bi-chevron-right"></i>
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormularioPedido;
