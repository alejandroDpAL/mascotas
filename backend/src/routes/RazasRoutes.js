import { Router } from "express";
import { CrearRazas, ListarRazas } from "../controllers/Razas.js";

const RouteRazas = Router()

RouteRazas.get('/listar', ListarRazas)
RouteRazas.post('/crear', CrearRazas)

export default RouteRazas