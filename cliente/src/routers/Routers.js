import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";

import Contact from "../pages/Contact";
import Vehiculos from "../pages/Vehiculos";
import Login from "../pages/Login"
import Register from "../pages/Register";
import MarcasVehiculos from "../pages/MarcasVehiculos";
import TiposVehiculos from "../pages/TiposVehiculos";
import DetallesUsuarios from "../pages/DetallesUsuarios";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/vehiculos" element={<Vehiculos/>} />
            <Route path="/marcasVehiculos" element={<MarcasVehiculos/>} />
            <Route path="/tiposVehiculos" element={<TiposVehiculos/>} />
            <Route path="/detallesUsuarios" element={<DetallesUsuarios />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<CarListing />} />
            <Route path="/cars/:slug" element={<CarDetails />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path = "/login" element ={<Login/>} />
            <Route path = "/register" element ={<Register/>} />
            
        </Routes>
     );
};

export default Routers;
