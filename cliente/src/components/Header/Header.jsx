import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";


const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/vehiculos",
      display: "Administrador",
    },
    {
      path: "/marcasvehiculos",
      display: "Marcas Autos",
    },
    {
      path: "/tiposvehiculos",
      display: "Tipos Autos",
    },
    {
    path: "/detallesUsuarios",
    display: "Usuarios",
  },
    {
      path: "/about",
      display: "Quiénes Somos",
    },
    {
      path: "/cars",
      display: "Guía de Autos",
    },
  
    {
      path: "/blogs",
      display: "Blog",
    },
    {
      path: "/contact",
      display: "Contacto",
    },
  
  ];

const Header = () => {
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
   
    return (
        <header className="header">
            {/*--------  header top-------*/}
             <div className="header__top">
                <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Necesita Ayuda?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> 506 84797554
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <button className = "btn secondary_btn">
                <Link to="/login" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-fill"></i> Iniciar sesión
                </Link>
                </button>

                <button className="btn primary_btn">
                <Link to="/register" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-fill"></i> Registrarse
                </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

     {/*--------  header middle-------*/}
     <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-roadster-fill"></i>
                    <span>
                      Friend's <br /> Car Rental
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Alajuela</h4>
                  <h6>San Carlos, Ciudad Quesada</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-timer-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Lunes a Domingo</h4>
                  <h6>09am - 5pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-whatsapp-line"></i> Contáctenos
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

        {/*--------  main navigation-------*/}

        <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>      
    );
};

export default Header;