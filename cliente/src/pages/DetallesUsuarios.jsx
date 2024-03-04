import React from "react";
import { Container, Row, Form } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/detallesUsuarios.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Swal from 'sweetalert2';

// variables que add valores en los campos


const DetallesUsuarios= () => {

    return  (
      <Helmet title="">
        <CommonSection title="Detalles de Usuarios" />
          <section>
            <Container>
            <Row>
             
          <div className="containe-detalle mt-5 shadow ">
          <div className="row-detalle">
          <div className="col-md-6 first_col ">
          </div>

            <div class="col-md-8 p-5 ">
                <h2>Digite la información solicitada</h2>
          <Form className="row g-3 detalleForm mt-4">
            <div className="col-md-6">

              <label htmlFor="exampleFormControlInput1" className="form-label">Nombre completo:</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"/>
            </div>

            <div className="col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">Número de cédula o de pasaporte:</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"/>
            </div>

            <div className="col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">Edad:</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"/>
            </div>

            <div className="col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">Correo electrónico:</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"/>
            </div>

            <div className="titulo-imagen">
              <div className="car-titulo">
               Adjuntar foto de la "Licencia de conducir", "Cédula de Identidad" o "Pasaporte":
            </div>
            <div className="input-group mb-3">
              <input type="file" className="form-control" id="inputGroupFile02"/>
            <label className="input-group-text" htmlfor="inputGroupFile02">Upload</label>
            </div>
            </div>

            <div className="mb-3">
                <button type="submit" className="btn btn-primary mt-3"value="Submit">Enviar</button>
            </div>
            </Form>
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