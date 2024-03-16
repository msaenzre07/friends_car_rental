import React, { useState } from 'react';
import axios from "axios";
import { Container, Row, Form } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/detallesUsuarios.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Swal from 'sweetalert2';


const DetallesUsuarios= () => {

// variables que add valores en los campos
const [nombre, setNombre] = useState("");
  const [numCedula, setNumCedula] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [id, setId] = useState();



//Add datos Usuarios
const addDetallesUsuarios = () => {
  axios.post("http://localhost:3001/api/create", {
     nombre: nombre,
     numCedula: numCedula,
      edad: edad,
      email:email,
      file: file
    })
    .then(() => {
     
      Swal.fire({
        title: "<strong>Registro exitoso!!!</strong>",
        html:
          "<i>La información <strong> " +
          nombre +
          " </strong>fue registrada con exito!!!</i>",
        icon: "sucess",
        timer: 3000,
      }).catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            JSON.parse(JSON.stringify(error)).message === "Network Error"
              ? "Intente más tarde"
              : JSON.parse(JSON.stringify(error)).message,
        });
      });
    });
};


      return  (
        <Helmet title="">
          <CommonSection title="Detalles de Usuarios" />
            <section className="background-section">
              <Container >
              <Row className="justify-content-center">
               
      
              <div class="col-md-8 p-5 ">
                  <h2>Digite la información solicitada</h2>
                 
            <Form className="row g-3 detalleForm mt-4">
              <div className="col-md-6">
  
                <label htmlFor="exampleFormControlInput1" className="form-label">Nombre completo:</label>
                <input type="text"  value={nombre}
                      onChange={(event) => {
                        setNombre(event.target.value);
                      }}
                className="form-control" id="exampleFormControlInput1"/>
              </div>
  
              <div className="col-md-6">
                <label htmlFor="exampleFormControlInput1" className="form-label">Número de cédula o pasaporte:</label>
                <input type="text"  value={numCedula}
                      onChange={(event) => {
                        setNumCedula(event.target.value);
                      }}
                 className="form-control" id="exampleFormControlInput1"/>
              </div>
  
              <div className="col-md-6">
                <label htmlFor="exampleFormControlInput1" className="form-label">Edad:</label>
                <input type="numero"  value={edad}
                      onChange={(event) => {
                        setEdad(event.target.value);
                      }}
                className="form-control" id="exampleFormControlInput1"/>
              </div>
  
              <div className="col-md-6">
                <label htmlFor="exampleFormControlInput1" className="form-label">Correo electrónico:</label>
                <input type="text"  value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                className="form-control" id="exampleFormControlInput1"/>
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
  
              <div className="mb-3" style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn btn-primary mt-3 "value="Submit" onClick={addDetallesUsuarios} style={{ fontSize: '1.1em', padding: '8px 16px' }}>Enviar</button>
              </div>
              </Form>
       
              </div>
              </Row>
              </Container>
            </section>
          </Helmet>
      );
  };

export default DetallesUsuarios;