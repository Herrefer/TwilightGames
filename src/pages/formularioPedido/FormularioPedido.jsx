import React from "react";
import "./formularioPedido.css";
import { Button, Container, Form } from "react-bootstrap";
import Banner from "../../assets/bannerBackground.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const FormularioPedido = () => {
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm();

  const navegar = useNavigate()

  const onSubmit = (datos) => {
    const id = crypto.randomUUID()
    const objetoPedido= {nombreCompleto: datos.apellidoNombre, telefono: datos.numeroTel, correoElectronico: datos.correo, idPedido: id}
    console.log(objetoPedido)
    sessionStorage.setItem('KeyPedido', JSON.stringify(objetoPedido))
    console.log(JSON.parse(sessionStorage.getItem('KeyPedido')) || []);
    navegar("/resumen")
  };

  return (
    <>
      {/* aqui revisar si es mejor un margin 4 o 5 (o tal vez más pequeño) */}
      <div className="d-flex py-4 px-4 bannerPagina">
        <Link to={"/juegos"}>
          <i className="bi bi-chevron-left text-light fs-1"></i>
        </Link>
        <p className="text-center flex-grow-1 fs-1 mb-0 text-light">
          {" "}
          Datos de contacto{" "}
        </p>
      </div>
      <Container fluid className="contenedorPagina">
        <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Apellido y nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Perez Juan"
              {...register("apellidoNombre", {
                required: "campo obligatorio",
                minLength: {
                  value: 7,
                  message: "el campo debe tener un mínimo de 7 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "el campo debe tener un máximo de 50 caracteres",
                },
              })}
            ></Form.Control>
            {errors.apellidoNombre ? (
              <Form.Text className="text-danger ms-1">
                {errors.apellidoNombre?.message}
              </Form.Text>
            ) : (
              <Form.Text className="ms-1">campo obligatorio</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNumero">
            <Form.Label>Número de teléfono móvil</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 3811234567"
              {...register("numeroTel", {
                required: "campo obligatorio",
                minLength: {
                  value: 10,
                  message: "el número debe tener un mínimo de 10 caracteres",
                },
                maxLength: {
                  value: 10,
                  message: "el número debe tener un máximo de 10 caracteres",
                },
              })}
            ></Form.Control>
            {errors.numeroTel ? (
              <Form.Text className="text-danger ms-1">
                {errors.numeroTel?.message}
              </Form.Text>
            ) : (
              <Form.Text className="ms-1">campo obligatorio</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCorreo">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: juanperez@correo.com"
              {...register("correo", {
                required: "campo obligatorio",
                minLength: {
                  value: 3,
                  message: "el correo debe tener un mínimo de 3 caracteres",
                },
                maxLength: {
                  value: 265,
                  message: "El correo debe tener un máximo de 265 caracteres",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Ingrese una dirección de correo electrónico válida",
                },
              })}
            ></Form.Control>
            {errors.correo ? (
              <Form.Text className="text-danger ms-1">
                {errors.correo?.message}
              </Form.Text>
            ) : (
              <Form.Text className="ms-1">campo obligatorio</Form.Text>
            )}
          </Form.Group>
          <div className="text-center">
            <Button variant="secondary" type="submit">
              Continuar al resumen <i className="bi bi-chevron-right"></i>
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormularioPedido;
