const express = require('express');//Para facilitar la comunicacion con el servidor
const router = express.Router();
const vehiculosController = require('../controllers/vehiculosController');//obteniendo todos los controladores ya creados para ser usados


//generación de rutas para usar la API creada para interactuar con la base de datos
//diferentes rutas a usar con las diferentes funcionalidades
router.post("/create", vehiculosController.createVehiculo);
router.get("/", vehiculosController.getAllVehiculos);
router.put("/updateVehiculos", vehiculosController.updateVehiculo);
router.delete("/delete/:id", vehiculosController.deleteVehiculo);

module.exports = router;