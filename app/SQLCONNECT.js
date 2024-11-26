const mysql = require('mysql2/promise');

// Configuración de la conexión
const dbConfig = {
  host: 'localhost',
  user: 'sa',
  password: 'cesar',
  database: 'PROspectos'
};

async function connectToDatabase() {
  try {
    // Crear una conexión
    const connection = await mysql.createConnection(dbConfig);
    console.log('Conexión exitosa a la base de datos MySQL');

    // Ejemplo de consulta
    const [rows, fields] = await connection.execute('SELECT * FROM Equipos');
    console.log('Resultados de la consulta:', rows);

    // Cerrar la conexión
    await connection.end();
    console.log('Conexión cerrada');
  } catch (error) {
    console.error('Error al conectar o consultar la base de datos:', error);
  }
}

// Ejecutar la función
connectToDatabase();