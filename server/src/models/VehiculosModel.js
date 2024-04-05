import db from "../database/db.js"; //se busca conectarse a la base de datos

import { DataTypes } from "sequelize"; //Tipo de datos para cada atributo de la base de datos

//El modelo de todos los Vehículos extrayendo todos sus campos
const VehiculosModel = db.define("vehiculos", {
  marca 
  modelo
  transmision
  kilometraje
  precio_dia
  imagen
});

export default VehiculosModel;
