import  Express  from "express";
import body_parser from "body-parser";
import cors from 'cors';
import rutaValidacion from "./src/routes/validacion.routes.js";
import { RouteCategorias } from "./src/routes/CategoriasRoutes.js";
import router from "./src/routes/usuarios.routes.js";
import RouteRazas from "./src/routes/RazasRoutes.js";
import routeGeneros from "./src/routes/GenerosRoutes.js";
import routeMascotas from "./src/routes/MascotasRoutes.js";

const servidor = Express();
servidor.use(cors())

servidor.use(body_parser.json());
servidor.use(body_parser.urlencoded({extended:false}))
servidor.use('/usuarios',router)
servidor.use('/razas',RouteRazas)
servidor.use('/generos',routeGeneros)
servidor.use('/categorias',RouteCategorias)
servidor.use('/mascotas',routeMascotas)
servidor.use(rutaValidacion)


servidor.listen(3000, ()=> {
    console.log("hola puerto 3000")
})