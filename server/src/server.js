const express = require("express");
const cors = require('cors');
const app = express();
const port= 3001;


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});


app.use(bodyParser.json());
app.use(express.json());

app.use('/', routes);

 
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin123456',
    database: 'friends_car_rental'
});

// Conexión base de datos
connection.connect((err) => {
    if (err) {
    console.error('Error de conexión a la base de datos: ', err);
    }else{
      
      console.log('Conexión exitosa a la base de datos'); 
      }
  });

  module.exports = connection;


  
