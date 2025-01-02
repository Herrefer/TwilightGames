import React from "react";
import "./navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import nando_logo2 from "../../assets/nando_logo2.png";
import { Link, NavLink } from "react-router-dom";

const BarraNavegacion = () => {
  return (
    <>
      <Navbar className="barraNav pb-0" as={Link} to={"/"} >
        <Container fluid className="ps-0 m-md-0 pe-3">
          <Navbar.Brand href="#">
            <img src={nando_logo2} alt="logo" width={110} />
          </Navbar.Brand>
          <Nav>
            <NavLink
            as={Link}
            to="*"
              className="text-dark fs-5 p-2 border-dark botonNavbar"
            >
              Cuenta <i className="bi bi-person-fill"></i>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default BarraNavegacion;
