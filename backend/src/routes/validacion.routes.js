import { Router } from "express";
import { validar } from "../controllers/Autentificacion.js";


const rutaValidacion = Router();

rutaValidacion.post('/validacion', validar)

export default rutaValidacion