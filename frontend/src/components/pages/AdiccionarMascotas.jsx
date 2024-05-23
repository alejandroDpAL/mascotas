import React, { useState, useEffect } from "react";
import close from "../../../public/imgs/btn-close.jpg";
import { Link } from "react-router-dom";
import regresar from "../../../public/imgs/atras.png";
import TomarFoto from "../../../public/imgs/photo-lg-0.jpg";
import select from "../../../public/imgs/arrows.svg";
import camara from "../../../public/imgs/icon-camera.svg";
import guardar from "../../../public/imgs/btn-save.jpg";
import axios from "axios";

function AdiccionarMascotas() {
  const [name, setName] = useState("");
  const [raza, setRaza] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [generos, setGeneros] = useState([]);
  const [genero, setGenero] = useState("");
  const [razas, setRazas] = useState([]);
  const [foto, setFoto] = useState(null);

  const razasURL = "http://localhost:3000/razas/listar";
  const categoriasURL = "http://localhost:3000/categorias/listar";
  const generosURL = "http://localhost:3000/generos/listar";
  const mascotasCrearURL = "http://localhost:3000/mascotas/crear";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [razasRes, categoriasRes, generosRes] = await Promise.all([
          axios.get(razasURL),
          axios.get(categoriasURL),
          axios.get(generosURL),
        ]);
        console.log("Razas:", razasRes.data);
        console.log("Categorías:", categoriasRes.data);
        console.log("Géneros:", generosRes.data);
        setRazas(razasRes.data);
        setCategorias(categoriasRes.data);
        setGeneros(generosRes.data);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén llenos
    if (!name || !raza || !categoria || !genero || !foto) {
      alert("Por favor, complete todos los campos antes de guardar.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("race_id", raza);
    formData.append("category_id", categoria);
    formData.append("gender_id", genero);
    formData.append("photo", foto);

    try {
      await axios.post(mascotasCrearURL, formData);
      alert("Mascota agregada con éxito");
    } catch (error) {
      console.error("Error al subir la imagen", error);
    }
  };



  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-800">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
        <div className="flex w-full h-10 mt-8 justify-around items-center mb-6">
          <button className="flex rounded-full w-8 h-8 justify-center items-center ">
            <Link to="/admimascotas">
              <img src={regresar} alt="Regresar" className="w-full h-full rounded-full" />
            </Link>
          </button>
          <div className="text-white text-lg font-bold text-center">Adiccionar mascotas</div>
          <button className="w-8 h-8 rounded-full flex items-center justify-center">
            <Link to="/admimascotas">
              <img src={close} alt="Cerrar" className="w-full h-full rounded-full" />
            </Link>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img src={TomarFoto} alt="perro1" className="rounded-full ml-4" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="bg-gray-400 w-11/12 h-12 ml-4 mt-4 rounded-3xl flex items-center">
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent flex-grow pl-4 border-none outline-none text-white"
            />
          </div>
          <div className="bg-gray-400 w-11/12 h-12 ml-4 mt-6 rounded-3xl flex items-center">
            <select
              name="raza"
              id="raza"
              value={raza}
              onChange={(e) => setRaza(e.target.value)}
              className="bg-transparent flex-grow pl-4 border-none outline-none text-white appearance-none"
            >
              <option value="" disabled>
                Seleccionar raza
              </option>
              {razas.map((raza) => (
                <option key={raza.id} value={raza.id}>
                  {raza.name}
                </option>
              ))}
            </select>
            <img src={select} alt="razas" className="rounded-full pr-4" />
          </div>
          <div className="bg-gray-400 w-11/12 h-12 ml-4 mt-6 rounded-3xl">
            <select
              name="categoria"
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="bg-transparent flex-grow pl-4 border-none outline-none text-white appearance-none"
            >
              <option value="" disabled>
                Select categoría
              </option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.name}
                </option>
              ))}
            </select>
            <img src={select} alt="categorías" className="rounded-full  mr-4" />
          </div>
          <div className="bg-gray-400 w-11/12 h-12 ml-4 mt-6 rounded-3xl flex items-center relative">
            <input
              type="file"
              id="foto"
              onChange={(e) => setFoto(e.target.files[0])}
              className="bg-transparent flex-grow pl-4 border-none outline-none text-white"
              style={{ borderRadius: '20px', height: '45px', width: 'calc(100% - 40px)', backgroundColor: 'rgba(206, 206, 206, 0.8)' }}
              required
            />
            <img src={camara} alt="Select" className="absolute top-3 right-3 pointer-events-none" />
          </div>
          <div className="bg-gray-400 w-11/12 h-12 ml-4 mt-6 rounded-3xl flex items-center">
            <select
              name="genero"
              id="genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              className="bg-transparent flex-grow pl-4 border-none outline-none text-white appearance-none"
            >
              <option value="" disabled>
                Seleccionar género
              </option>
              {generos.map((genero) => (
                <option key={genero.id} value={genero.id}>
                  {genero.name}
                </option>
              ))}
            </select>
            <img src={select} alt="géneros" className="rounded-full pr-4" />
          </div>

          {/* Botón Guardar */}
          <div className="mt-4 flex items-center justify-center">
            <button type="submit" className="rounded-full">
              <Link to="/admimascotas" className="rounded-full">
                <img src={guardar} alt="guardar" className="rounded-full" />
              </Link>

            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default AdiccionarMascotas;
