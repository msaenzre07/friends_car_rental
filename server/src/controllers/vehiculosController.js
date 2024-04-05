

//CRUD- Registrar un vehiculos
app.post("/create",(req, res) => {
    const marca = req.body.nombre;
    const modelo = req.body.modelo;
    const transmision = req.body.transmision;
    const kilometraje = req.body.kilometraje;
    const precioDia = req.body.precioDia;
    const imagen =  req.body.imagen;
  

 db.query('INSERT INTO vehiculos( marca, modelo, transmision,kilometraje, precioDia, imagen) VALUES (?,?,?,?,?,?)',
    (err,result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al registrar el vehículo");
    } else {
        res.send("Vehículo registrado con éxito");//Test "vehículo registrado con éxito"
      }
    });
});
//CRUD-Listar vehículos
app.get("/vehiculos",(req, res) => {
   db.query('SELECT * FROM vehiculos',
    (err, result) => {
        if(err){
            console.log(err);
            res.status(500).send("Error al obtener la lista de vehículos");
        }else{
           res.send(result);//result es para ver los datos que en la DB de vehículos
        }
    }
    );   
});

//CRUD-uActualizar vehículos
app.put("/api/updateVehiculos",(req, res) => {
  const marca = req.body.nombre;
  const modelo = req.body.modelo;
  const transmision = req.body.transmision;
  const kilometraje = req.body.kilometraje;
  const precioDia = req.body.precioDia;
  const imagen =  req.body.imagen;


db.query('UPDATE vehiculos SET marca=?, modelo=?, transmision=?, kilometraje=?, precioDia=?, imagen=? WHERE id=?',
  [marca, modelo, transmision, kilometraje, precioDia, imagen,  id], 
(err,result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al actualizar el vehículo");
    } else {
        res.send("Vehículo actualizado con éxito");
      }
    }
  );
});

//CRUD-Eliminar vehículos
app.delete("/api/delete/:id",(req,res)=>{
  const id = req.params.id;

 db.query('DELETE FROM vehiculos WHERE id=?',id,
    (err,result)=>{
      if (err) {
        console.log(err);
        res.status(500).send("Error al eliminar el vehículo");
    } else {
        res.send("Vehículo eliminado con éxito");
      }
    }
  );
});
