import { Router } from 'express';
import { ActualizarMascotas, CrearMascotas, EliminarMascotas, ListarMascotas } from '../controllers/MascotasController.js';

const routeMascotas = Router();

routeMascotas.get('/listar', ListarMascotas);
routeMascotas.post('/crear',/* validarToken, */ CrearMascotas);
routeMascotas.put('/actualizar/:id', ActualizarMascotas);
routeMascotas.delete('/eliminar/:id', EliminarMascotas);

export default routeMascotas;
