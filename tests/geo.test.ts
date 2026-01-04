import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';

describe('Pruebas del Módulo Geográfico', () => {
  
  // IMPORTANTE: Cerramos la conexión para que Jest no se quede colgado
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('Debería obtener información de una ciudad correctamente (GET /api/geo/city/:city)', async () => {
    const response = await request(app).get('/api/geo/city/Caracas');
    
    expect(response.status).toBe(200);
    
    // Aquí estaba el detalle: hay que entrar a .data
    expect(response.body.data).toHaveProperty('nombre');
    expect(response.body.data.nombre).toBe('Caracas');
    expect(response.body.status).toBe('success');
  });

  it('Debería dar error 404 si la ciudad no existe', async () => {
    const response = await request(app).get('/api/geo/city/CiudadInventada123');
    expect(response.status).toBe(404);
  });
});