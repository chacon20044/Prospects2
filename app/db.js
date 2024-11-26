const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Configuración de SQL Server
const config = {
  user: 'sa',
  password: '1234',
  server: 'localhost',
  port: 1433,
  database: 'PROSPECTOS2',
  options: {
    encrypt: false,
    enableArithAbort: true,
  },
};

// Ruta para registrar un jugador
app.post('/api/register/jugador', async (req, res) => {
  const {
    nombre, apellido, estatura, peso, edad, ciudad, posicion, equipo, estadoSalud,
  } = req.body;

  try {
    const pool = await sql.connect(config);
    await pool.request()
      .input('Nombre', sql.NVarChar(50), nombre)
      .input('Apellido', sql.NVarChar(50), apellido)
      .input('Estatura', sql.Int, estatura)
      .input('Peso', sql.Int, peso)
      .input('Edad', sql.Int, edad)
      .input('Ciudad', sql.NVarChar(50), ciudad)
      .input('Posicion', sql.NVarChar(50), posicion)
      .input('Equipo', sql.NVarChar(50), equipo)
      .input('EstadoSalud', sql.NVarChar(50), estadoSalud)
      .execute('spRegistrarJugador');
    
    res.status(200).send('Jugador registrado con éxito.');
  } catch (err) {
    console.error('Error al registrar jugador:', err);
    res.status(500).send('Error al registrar jugador.');
  } finally {
    sql.close();
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});