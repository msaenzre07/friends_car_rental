const db = require('../models/db')
const jwt = require('jsonwebtoken');

const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")

// Rutas de autenticación y registro
app.post("/registro", async (req, res) => {
    const { email, password } = req.body;
  
  // Hash de la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Inserta el nuevo usuario en la base de datos
db.query(
    'INSERT INTO usuarios (email, password) VALUES (?, ?)',
    [email, hashedPassword],
    (err, result) => {
      if (err) {
          res.status(500).json({ error: "Error al registrar usuario" });
        } else {
          res.status(201).json({ message: "Usuario registrado con éxito" });
        }
      }
    );
  });

  app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
// Busca el usuario en la base de datos
db.query(
      'SELECT * FROM usuarios WHERE email = ?',
    [email, password],
    async (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al iniciar sesión" });
      } else if (result.length > 0) {
      // Compara la contraseña ingresada con la almacenada en la base de datos
      const match = await bcrypt.compare(password, result[0].password);
  
      if (match) {
      // Genera un token JWT y lo envía al cliente
        const token = jwt.sign({ email }, 'JWT_SECRET_KEY', {
             expiresIn: '2m',
        });
          res.status(200).json({ token });
        } else {
            res.status(401).json({ error: "Credenciales incorrectas" });
        }
        } else {
          res.status(401).json({ error: "Credenciales incorrectas" });
        }
      }
    );
  });








