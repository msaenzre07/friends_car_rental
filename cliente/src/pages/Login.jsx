import React, { useState } from "react";
import { Container, Row, Form, Button} from "reactstrap";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/login.css";


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (event) => {
    setCredentials((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <Helmet title="">
      <CommonSection title="Iniciar Sesión" />
      <section className="body-login">
        <Container>
          <Row className="justify-content-center">
            <div className="box">
              <span class="borderLine"></span>

              <Form onSubmit={handleClick}>
                <h2>Iniciar Sesión</h2>
                <div className="inputBox">
                  <input
                    type="email"
                    placeholder=""
                    required
                    id="email"
                    onchange={handleChange}
                  />
                  <span>Correo Electrónico</span>
                  <i></i>
                </div>
                
                <div className="inputBox">
                  <input
                    type="password"
                    placeholder=""
                    required
                    id="password"
                    onchange={handleChange}
                  />
                  <span>Contraseña</span>
                  <i></i>
                </div>
              
                <div className="links">
                  <a href="#">Olvidó la Contraseña?</a>
                  <p>
                    ¿No tiene una cuenta?<Link to="/register">Registrate</Link>
                  </p>
                </div>
                <Button className="btn secondary_btn auth_btn" type ="submit">Login</Button>
                
              </Form>
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
