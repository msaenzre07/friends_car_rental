import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/bmw-offer.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">¿Quiénes Somos?</h4>
              <h2 className="section__title">Friend's Car Rent</h2>
              <h2 className="section__title">Misión</h2>
              <p className="section__description" style={{ textAlign: "justify" }}>
              Friend's Car Rent es una agencia que se estableció en el 2024. Nació con la misión de proporcionar 
              soluciones de movilidad eficientes y confiables a nuestros clientes ofreciendo una flota diversificada 
              de vehículos de alta calidad y un servicio excepcional. Nos comprometemos a satisfacer las necesidades 
              de transporte de nuestros clientes, contribuyendo a experiencias de viajes seguros, cómodos y memorables.
             </p>
              
             <h2 className="section__title">Visión</h2>
              <p className="section__description" style={{ textAlign: "justify" }}>
              Ser la agencia de renta de autos líder a nivel regional, reconocida por la excelencia en el servicio al cliente,
              la innovación en soluciones de movilidad y la sostenibilidad ambiental. Nos esforzamos por ser pioneros en la adopción
              de tecnologías emergentes para mejorar la eficiencia operativa y ofrecer experiencias de viajes fluidas. 
              Aspiramos a ser un referente en la industria, estableciendo estándares de calidad y compromiso social.
              </p>
    
             <div className="about__section-content" >
              <h4 className="section__subtitle">Nuestros</h4>
              <h2 className="section__title">Valores</h2>
            </div>
             <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Compromiso.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Integridad.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Calidad.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Eficiencia operativa.
                </p>
              </div>
            </div>
          </Col>
 
             <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
       </Container>
    </section>
  );   
};

export default AboutSection;