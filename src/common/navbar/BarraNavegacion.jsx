import React from "react";
import "./navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import nando_logo2 from "../../assets/nando_logo2.png";


const BarraNavegacion = () => {
  return (
    <>
      <Navbar className="barraNav">
        <Container fluid className="ps-0 m-md-0 pe-3">
          <Navbar.Brand href="#">
            <img src={nando_logo2} alt="logo" width={150} />
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              href="#"
              className="text-dark fs-2 p-2 border-dark botonNavbar"
            >
              Cuenta <i className="bi bi-person-fill"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default BarraNavegacion;
