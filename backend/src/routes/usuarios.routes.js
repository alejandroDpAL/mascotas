import { Router } from "express";
import { deleteUser, getUserById, getUsers, setUser, updateUser } from "../controllers/usuarios.controller.js";

const router = Router()

router.get('/listar', getUsers)
router.post('/crear', setUser)
router.get('/buscar/:id', getUserById)
router.put('/actualizar/:id', updateUser)
router.delete('/eliminar/:id', deleteUser)


export default router
