const connection = require('../models/db')

const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")


//CRUD- Registrar un vehiculos
app.post("/api/create",(req, res) => {
    const placa = req.body.placa;
    const marca = req.body.marca;
    const modelo = req.body.modelo;
    const transmision = req.body.transmision;

   connection.query('INSERT INTO vehiculos(placa, marca, modelo, transmision) VALUES (?,?,?,?)',
    (err,result) => {
      if (err) {
        console.log(err);
    } else {
        res.send(result);//Test "vehículo registrado con éxito"
      }
    });
});
//CRUD-Listar vehículos
app.get("/api/vehiculos",(req, res) => {
    connection.query('SELECT * FROM vehiculos',
    (err, result) => {
        if(err){
            console.log(err);
        }else{
           res.send(result);//result es para ver los datos que en la DB de vehiculos
        }
    }
    );   
});

//CRUD-udpate vehículos
app.put("/api/updateVehiculos",(req, res) => {
  const id = req.body.id;
  const placa = req.body.placa;
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const transmision = req.body.transmision;

connection.query('UPDATE vehiculos SET placa=?, marca=?, modelo=?, transmision=? WHERE id=?',
  [placa, marca, modelo, transmision,  id], 
(err,result) => {
      if (err) {
        console.log(err);
    } else {
        res.send(result);
      }
    }
  );
});

//CRUD-delete vehículos
app.delete("/api/delete/:id",(req,res)=>{
  const id = req.params.id;

  connection.query('DELETE FROM vehiculos WHERE id=?',id,
    (err,result)=>{
      if (err) {
        console.log(err);
    } else {
        res.send(result);
      }
    }
  );
});
