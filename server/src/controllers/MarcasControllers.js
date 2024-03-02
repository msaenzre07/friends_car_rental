const connection = require('../models/db')

const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")


//CRUD- Registrar marcas
app.post("/api/createMarcas",(req, res) => {
    const marca = req.body.marca;
   
   connection.query('INSERT INTO vehiculos( marca, ) VALUES (?)',
    (err,result) => {
      if (err) {
        console.log(err);
    } else {
        res.send(result);//Test "Marcas registrado con éxito"
      }
    });
});
//CRUD-Listar marcas
app.get("/api/Marcas",(req, res) => {
    connection.query('SELECT * FROM marcas',
    (err, result) => {
        if(err){
            console.log(err);
        }else{
           res.send(result);//result es para ver los datos que en la DB de marcas
        }
    }
    );   
});

//CRUD-udpate Marcas
app.put("/api/updateMarcas",(req, res) => {
  const id = req.body.id;
  const marca = req.body.marca;

connection.query('UPDATE vehiculos SET  marca=? WHERE id=?',
  [marca, id], 
(err,result) => {
      if (err) {
        console.log(err);
    } else {
        res.send(result);
      }
    }
  );
});

//CRUD-delete marcas
app.delete("/api/delete/:id",(req,res)=>{
  const id = req.params.id;

  connection.query('DELETE FROM marcas WHERE id=?',id,
    (err,result)=>{
      if (err) {
        console.log(err);
    } else {
        res.send(result);
      }
    }
  );
});
