import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "Quiénes Somos",
  },

  {
    path: "/Reservar",
    display: "Reservar",
  },

  {
    path: "/contact",
    display: "Contacto",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-roadster-fill"></i>
                  <span>
                    Friend's Car <br /> Rent
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content"style={{ textAlign: "justify"}} >
              Aviva tu pasión por los viajes, ven disfruta de una experiencia
              increíble en Friend's Car Rent. Haz que una
              ocasión especial sea memorable. Viaje a la velocidad del presente,
              es tu elección. Siempre.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Enlaces Rápidos</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Sede Central</h5>
              <p className="office__info">
                <i class="ri-road-map-line" style={{ color: "#faa935" }}></i>
                Alajuela, San Carlos, Ciudad Quesada
              </p>

              <p className="office__info">
                <i class="ri-mail-check-line" style={{ color: "#faa935" }}></i>
                Correo: hernanvalerio7190@gmail.com
              </p>

              <p className="office__info">
                <i class="ri-timer-line" style={{ color: "#faa935" }}></i>
                Horario de Oficina: 09am - 05pm
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Contacta Con Nosotros</h5>
              <div className="newsletter">
                <span>
                  <i class="ri-whatsapp-line" style={{ color: "#faa935" }}></i>
                  Teléfono: +50684797554
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer_copyright">
              <p className="section__footer d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Friend's Car
                Rent. Todos los derechos reservados.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
