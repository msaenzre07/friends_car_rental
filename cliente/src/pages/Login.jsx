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
            <Col lg="9" className= "m-auto">
            <div className="login_container d-flex justify-content-between">
            <div classNme = "login_img">
            <img src={loginImg} alt="" />
            </div>

            <div className="login_form">
            <div className="user">
                <img src={userIcon} alt="" />
         </div> 
            <h2> Login </h2>

           <Form onSubmit={handleClick}>
            <FormGroup>
        <input type= "email" placeholder="Correo Electrónico" required id="email"
        onchange={handleChange} />
            </FormGroup>

            <FormGroup>
        <input type= "password" placeholder="Contraseña" required id="password"
        onchange={handleChange}/>
            </FormGroup>
          <Button className="btn secondary_btn auth_btn" type ="submit">Login</Button>
           </Form>
           <a href="#">Olvidó la Contraseña?</a>
           <p>¿No tiene una cuenta?<Link to="/register">Registrate</Link></p>
           </div>
            </div>
            </Col>         
            </Row>
          </Container> 
          </section>
        </Helmet>
    );
};

export default Login;