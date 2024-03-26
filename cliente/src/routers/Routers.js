import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";

import Contacto from "../pages/Contacto";
import Vehiculos from "../pages/Vehiculos";
import Login from "../pages/Login"
import Registro from "../pages/Registro";
import Usuarios from "../pages/Usuarios";



const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/vehiculos" element={<Vehiculos/>} />
           
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<CarListing />} />
            <Route path="/cars/:slug" element={<CarDetails />} />
            <Route path="/Usuarios" element={<Usuarios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path = "/login" element ={<Login/>} />
            <Route path = "/registro" element ={<Registro/>} />
            
        </Routes>
     );
};

export default Routers;
