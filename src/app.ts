import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db'; 

dotenv.config();

const app = express();
app.use(express.json()); // Para que el servidor entienda JSON

connectDB(); // Conectar a la base de datos
const PORT = process.env.PORT || 3000;

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('CiudadData API funcionando ');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;