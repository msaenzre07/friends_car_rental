import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/login.css";

import loginImg from "../assets/all-images/login.jpg";
import userIcon from "../assets/all-images/user.png"


const Login = () => {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });
  
  const handleChange = (event) => {
   setCredentials(prev => ({...prev, [event.target.id]: event.target.value}));
  };

  const handleClick = event => {
    event.preventDefault();
  };

    return (
      <Helmet title="">
      <CommonSection title="Iniciar Sesión" />
      <section>
        <Container>
          <Row>
            <Col>
            <div className="box">
               <Form onSubmit={handleClick}>
                <h2>Iniciar Sesión</h2>
                <div className="inputBox">
                <input type= "email" placeholder="Correo Electrónico" required id="email"
                onchange={handleChange} />
                <span>Correo Electrónico</span>
                <i></i>
                </div>
                <div className="inputBox">
                <input type= "password" placeholder="Contraseña" required id="password"
                 onchange={handleChange}/>
                  <span>Contraseña</span>
                  <i></i>
                </div>
                <Button className="btn secondary_btn auth_btn" type ="submit">Login</Button>
                <div className="links">
                <a href="#">Olvidó la Contraseña?</a>
           <p>¿No tiene una cuenta?<Link to="/register">Registrate</Link></p>

                </div>
                </Form> 
           
           
        --------

         
            <FormGroup>
        
            </FormGroup>

            <FormGroup>
        
            </FormGroup>
         
         
          
           </div>
          
            </Col>         
            </Row>
          </Container> 
          </section>
        </Helmet>
    );
};

export default Login;