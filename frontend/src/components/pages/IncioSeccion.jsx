import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgLogin from '../../../public/imgs/bg-login.jpg';

const IniciarSesion = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch("http://localhost:3000/validacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Autenticación exitosa, redirige a /admimascotas
        navigate("/admimascotas");
      } else {
        // Autenticación fallida, muestra mensaje de error
        const data = await response.json();
        setError(data.message || "Error en la autenticación");
      }
    } catch (error) {
      console.error("Error al intentar iniciar sesión:", error);
      setError("Error interno del servidor");
    }
  };

  return (
    <div className="bg-cover bg-center h-full w-full bg-gray-400" style={{ backgroundImage: `url(${bgLogin})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center' }}>
      <div >
        <form style={{ width: '100%', height: '766px', paddingTop: '570px' }}>
          <div className="mb-6">
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-input pl-3 h-11 rounded-full placeholder-customBlue" 
              style={{ width: '350px' }} 
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="form-input  pl-3 h-11 rounded-full placeholder-customBlue" 
              style={{ width: '350px' }} 
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="">
            <button type='submit' className='w-full bg-blue-950 rounded-3xl text-white py-2 ml-5 px-4 hover:bg-blue-900' style={{ width: '90%' }} onClick={handleSubmit}>
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default IniciarSesion;
