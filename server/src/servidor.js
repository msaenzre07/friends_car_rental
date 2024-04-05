const express = require("express")
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const routes = require('./routes')

app.use(cors());

app.listen(3010, () => {
  console.log("Corriendo en el puerto 3010");
  });
  

const db =mysql.createConnection({
  host: "localhost",
  database:"friends_car_rent",
  user: "root",
  password:"Admin123456"
});
db.connect(function(error){
  if (error) {
 throw error;
  }else{
    console.log('Conexión exitosa'); 
    }
});
module.exports = db















 


  
