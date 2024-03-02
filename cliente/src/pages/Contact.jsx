import React from "react";

import { Container, Row, Col} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";


const Contact = () => {
    return ( 
        <Helmet title="Contact">
      <CommonSection title="Contáctanos" />
      <section>
        <Container>
        <Row>
            <Col lg="7" md="7">
              <h2 className="section__title">¿Cómo podemos ayudarte?</h2>
              <p className="section__description">
              Alquilar un auto puede ser estresante y te entendemos perfectamente. ¡No dudes en comunicarte con nosostros! Prepararemos tu auto de alquiler.</p>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
              <h2 className="section__title">Contacta con nosotros</h2>
              
              <div className=" d-flex align-items-center gap-2">
              <i class="ri-road-map-line"></i>Estamos ubicados en:
              <p className="section__description mb-0">Alajuela, San Carlos, Ciudad Quesada</p>   
            </div>

                <div className=" d-flex align-items-center gap-2">
                   <i class="ri-whatsapp-line"></i> Telefóno:
                  <p className="section__description mb-0">+506 84797554</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                <i class="ri-mail-check-line"></i>Correo Electrónico:
                  <p className="section__description mb-0"> hernanvalerio7190@gmail.com</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                <i class="ri-timer-line"></i>Atención al Cliente:
                <p className="section__description mb-0"> Lunes a Domingo de 09:00 a.m a 05:00 p.m.</p>
                </div>
               </div>
              </Col>
            </Row>
        </Container>
    </section>
    </Helmet>
    );  
};

export default Contact;