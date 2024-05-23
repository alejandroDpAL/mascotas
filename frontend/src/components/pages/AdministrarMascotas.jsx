import React from "react";
import { Link } from "react-router-dom";
import close from "../../../public/imgs/btn-close.jpg";
import adicionar from "../../../public/imgs/btn-add.jpg";
import Buildog from "../../../public/imgs/photo-sm-1.jpg";
import iconMostrar from "../../../public/imgs/btn-show.jpg";
import iconEditar from "../../../public/imgs/btn-edit.jpg";
import iconEliminar from "../../../public/imgs/btn-delete.jpg";

const AdministrarMascotas = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-800">
<div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">

        {/* Titulo e icono "x" */}
        <div className="flex w-full h-10 mt-8 justify-around items-center mb-6">
          <div className="text-white text-lg font-bold text-center">Administrar mascotas</div>
          <button className="w-8 h-8 rounded-full flex items-center justify-center">
          <Link to="/">
            <img src={close} alt="Cerrar" className="w-full h-full rounded-full" />
            </Link>
          </button>
        </div>
        {/* Imagen Adiccionar*/}
        <button className="flex justify-center items-center mt-2">
          <Link to="/adicimascotas">
            <img
              src={adicionar}
              alt="adicionar"
              className="w-full h-full rounded-full "
            />
          </Link>
        </button>
        {/* Estilos del registro de la amscota */}
        <div className="bg-gray-400 w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12 h-24 mt-5 rounded-2xl flex items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16">
          <img src={Buildog} alt="perro1" className="w-16 h-16 rounded-full mr-4" />
          <div className="text-cyan-950 flex-grow">
            <h1>Karsten</h1>
            <h1>Buildog</h1>
          </div>
          {/* Funcionalidad, buscar, editar y eliminar*/}
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 rounded-full">
            <Link to="/consulmascota">
              <img src={iconMostrar} alt="Mostrar" className="w-full h-full rounded-full" />
              </Link>
            </button>
            <button className="w-8 h-8 rounded-full">
            <Link to="/modimascota">
              <img src={iconEditar} alt="Editar" className="w-full h-full rounded-full" />
              </Link>
            </button>
            <button className="w-8 h-8 rounded-full">
              <img src={iconEliminar} alt="Eliminar" className="w-full h-full rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministrarMascotas;
