const connection = require('../models/db')

const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")


//CRUD- Registrar tipos autos
app.post("/api/create",(req, res) => {
    const marca = req.body.tipo;
   
   connection.query('INSERT INTO vehiculos( marca, ) VALUES (?)',
    (err,result) => {
      if (err) {
        console.log(err);
    } else {
        res.send(result);//Test "Tipo de vehículo registrado con éxito"
      }
    });
});
//CRUD-Listar tipos de autos
app.get("/api/Tipos",(req, res) => {
    connection.query('SELECT * FROM tipos',
    (err, result) => {
        if(err){
            console.log(err);
        }else{
           res.send(result);//result es para ver los datos que en la DB de marcas
        }
    }
    );   
});

//CRUD-udpate tipos autos
app.put("/api/updateTipos",(req, res) => {
  const id = req.body.id;
  const tipo = req.body.tipo;

connection.query('UPDATE vehiculos SET  tipo=? WHERE id=?',
  [tipo, id], 
(err,result) => {
      if (err) {
        console.log(err);
    } else {
        res.send(result);
      }
    }
  );
});

//CRUD-delete tipos autos
app.delete("/api/delete/:id",(req,res)=>{
  const id = req.params.id;

  connection.query('DELETE FROM tipos WHERE id=?',id,
    (err,result)=>{
      if (err) {
        console.log(err);
    } else {
        res.send(result);
      }
    }
  );
});
