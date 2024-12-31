import React from 'react';
import './resumenPedido.css'
import { Container, ListGroup } from 'react-bootstrap';
import MenuResumenPedido from './components/MenuResumenPedido';

const ResumenPedido = () => {
    return (
      <>
      <MenuResumenPedido></MenuResumenPedido>
       <div className="d-flex py-4 px-4 bannerPagina">
        <a href="#">
          <i className="bi bi-chevron-left text-light fs-1"></i>
        </a>
        <p className="text-center flex-grow-1 fs-1 mb-0 text-light"> Resumen  </p>
      </div>
      <Container className='p-3'>
        <ListGroup className=' border border-secondary mb-5'>
            <div className='d-flex justify-content-between py-1 px-1 border-bottom border-dark'>
                <div><p className='mb-0'>Juan Perez</p></div>
                <div><p className='mb-0'>Tel: 3811234567</p></div>
            </div>
            <ListGroup.Item>
                <div className='d-flex justify-content-between py-1 px-1'>
                    <div><p className='mb-0'>X25 Juegos</p></div>
                    <div><p className='mb-0'>$5500</p></div>
                </div>
            </ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <ListGroup.Item>Assasins Creed Brotherhood</ListGroup.Item>
            <div className='d-flex justify-content-between py-1 px-1 border-top border-dark'>
                <div><p className='mb-0'>juanperez@correo.com</p></div>
                <div><p className='mb-0'>#Pedido: 123456789</p></div>
            </div>
        </ListGroup>
      </Container>
      </>
    );
};

export default ResumenPedido;