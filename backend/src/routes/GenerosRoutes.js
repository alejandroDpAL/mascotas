import { Router } from "express";
import { CrearGeneros, ListarGeneros } from "../controllers/Generos.js";

const routeGeneros = Router()

routeGeneros.get('/listar', ListarGeneros)
routeGeneros.post('/crear', CrearGeneros)

export default routeGeneros