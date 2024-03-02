const express = require("express");

const router = express.Router();

const vehiculosControllers = require ("../controllers/vehiculosControllers");
const marcasControllers = require ("../controllers/MarcasControllers");
const tiposControlles = require("../controllers/tiposControllers");

module.exports = router;