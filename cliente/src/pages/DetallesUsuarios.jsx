import React from "react";
import { Container, Row, Form } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/detallesUsuarios.css";

const DetallesUsuarios= () => {


    return  (
        <Helmet title="Detalles de Usuarios">
          <CommonSection title="Detalles de Usuarios" />
          <section>
            <Container>
              <Row>
              <div class="wrapper">
               <div class="container main">
              <div class="row">
            <div class="col-md-6 side-image">

             
            </div>  
            </div>
        </div>
    </div>
              </Row>
            </Container>
          </section>
        </Helmet>
    );
};

export default DetallesUsuarios;