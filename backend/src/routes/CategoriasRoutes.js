import { Router } from "express";
import { CrearCategorias, ListarCategorias } from "../controllers/Categorias.js";

export const RouteCategorias = Router()

RouteCategorias.get('/listar', ListarCategorias)
RouteCategorias.post('/crear', CrearCategorias)