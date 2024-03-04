import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
/*import axios from 'axios';*/
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";

import registerImg from "../assets/all-images/register.jpg";
import userIcon from "../assets/all-images/user.png"


const Register = () => {

  const [credentials, setCredentials] = useState({
    usuario: undefined,
    email: undefined,
    password: undefined,
    Repetir_password: undefined,
  });
  
  const handleChange = (event) => {
   setCredentials(prev => ({...prev, [event.target.id]: event.target.value}));
  };

  const handleClick = event => {
    event.preventDefault();
  };

    return (
      <Helmet title="">
      <CommonSection title="Registro de Usuarios" />
      <section>
      <Container>
        <Row>
          <Col lg="9" className= "m-auto">
            <div className="login_container d-flex justify-content-between">
            <div classNme = "login_img">
              <img src={registerImg} alt="" />
            </div>

            <div className="login_form">
            <div className="user">
              <img src={userIcon} alt="" />
              </div> 
            <h2>Registro</h2>

          <Form onSubmit={handleClick}>
          <FormGroup>
            <input type= "usuario" placeholder="Usuario" required id="usuario"
            onchange={handleChange} />
          </FormGroup>

          <FormGroup>
            <input type= "email" placeholder="Correo electrónico" required id="email"
            onchange={handleChange} />
          </FormGroup>

          <FormGroup>
            <input type= "password" placeholder="Contraseña" required id="password"
             onchange={handleChange} />
          </FormGroup>

          <FormGroup>
           <input type= "confirmar_password" placeholder="Confirmar contraseña" required id="confirmar_password"
           onchange={handleChange} />
         </FormGroup>

          <Button className="btn secondary_btn auth_btn" type ="submit">Registrarse</Button>
          </Form>
           <p>¿Ya tienes cuenta?<Link to="/login">Login</Link></p>
           </div>
            </div>
              </Col>
            </Row>
            </Container> 
          </section>
      </Helmet>
    );
};

export default Register;
        
