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
           
          <div className="content-detalles ">
          
          <h2 className="usuarios">Digite la<span>información solicitada</span> </h2>
          <div className="contact-wrapper animated bounceInUp">
            <div class="contact-form">s
            <h3>Para más información</h3>
            <Form action="">
            <p>
              <label htmlFor="exampleFormControlInput1" className="form-label">Nombre completo:</label>
              <input type="Nombre" className="form-control" id="Nombre"/>
            </p>
            <p>
            <div className="col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">Número de cédula o de pasaporte:</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"/>
            </div>
            </p>
            <p>
            <div className="col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">Edad:</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"/>
            </div>
            </p>
            <p>
            <div className="col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">Correo electrónico:</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"/>
            </div>
            </p>
            <p>
            <div className="titulo-imagen">
              <div className="car-titulo">
               Adjuntar foto de la "Licencia de conducir", "Cédula de Identidad" o "Pasaporte":
            </div>
            <div className="input-group mb-3">
              <input type="file" className="form-control" id="inputGroupFile02"/>
            <label className="input-group-text" htmlfor="inputGroupFile02">Upload</label>
            </div>
            </div>
            </p>
            <p>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary mt-3"value="Submit">Enviar</button>
            </div>
            </p>
            </Form>
            </div>
            <div class="contact-info">
                <h4>More Info</h4>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> Baker Street</li>
                    <li><i class="fas fa-phone"></i> (111) 111 111 111</li>
                    <li><i class="fas fa-envelope-open-text"></i> contact@website.com</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
                <p>Company.com</p>
            </div>





            </div> 
            </div>
           
              
          
         
          </section>
        </Helmet>
    );
};

export default DetallesUsuarios;