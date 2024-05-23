import React, { useState } from 'react';
import bgBlue from '../assets/bg.svg';
import { Link } from 'react-router-dom'; 
import bgBack from '../assets/btn-back.svg';
import bgClose from '../assets/btn-close.svg';
import bgPetCamera from '../assets/photo-lg-1.svg';
import bgSelect from '../assets/arrows.svg';
import bgIconCamera from '../assets/icon-camera.svg';
import btnUpdate from '../assets/btn-update.svg';


function ModificarMascota() {


    return (
        <div
            className='flex flex-col items-center justify-center min-h-screen'
            style={{ 
                backgroundImage: `url(${bgBlue})`, 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center', 
                paddingBottom: '5vh' 
            }} 
        >

            <div className="flex items-center">
            <Link to="/ListarM">
                <img src={bgBack} alt="Close" className="cursor-pointer mb-20 mr-16" />
                </Link>
                <span className="text-gray-50 mb-20 text-xl" >Modificar Mascota</span>
                <Link to="/">
                <img src={bgClose} alt="Close" className="cursor-pointer mb-20 ml-12" />
                </Link>
            </div>
            <img src={bgPetCamera} alt="Camera" className="cursor-pointer -mt-8" />

            <input
                type='text'
                id='nombre'
                value={nombre}
                placeholder='Nombre'
                onChange={(e) => setNombre(e.target.value)}
                className='bg-slate-400 px-3 py-2 rounded-3xl border-gray-300 bg-transparent focus:outline-none ml-1 mt-8 placeholder-gray-500' 
                style={{ height: '40px', width: '350px',  backgroundColor: 'rgba(206, 206, 206, 0.8)'  }}
                required
            />
            
           
            <div className="relative">
                <input
                    type='text'
                    id='raza'
                    value={raza}
                    placeholder='Seleccione Raza..'
                    onChange={(e) => setRaza(e.target.value)}
                    className='bg-slate-400 px-3 py-2 rounded-3xl border-gray-300 bg-transparent focus:outline-none ml-1 mt-4 placeholder-gray-500' 
                    style={{ height: '40px', width: '350px', backgroundColor: 'rgba(206, 206, 206, 0.8)'   }}
                    required
                />
                <img src={bgSelect} alt="Select" className="absolute top-9 right-3 transform -translate-y-1/2 pointer-events-none" />
            </div>
            

            <div className="relative">
                <input
                    type='text'
                    id='categoria'
                    value={categoria}
                    placeholder='Seleccione Categoria..'
                    onChange={(e) => setCategoria(e.target.value)}
                    className='bg-slate-400 px-3 py-2 rounded-3xl border-gray-300 bg-transparent focus:outline-none ml-1 mt-4 placeholder-gray-500' 
                    style={{ height: '40px', width: '350px',backgroundColor: 'rgba(206, 206, 206, 0.8)'  }}
                    required
                />
                <img src={bgSelect} alt="Select" className="absolute top-9 right-3 transform -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="relative">
            <input
                type='text'
                id='foto'
                value={foto}
                placeholder='Subir foto'
                onChange={(e) => setFoto(e.target.value)}
                className='bg-slate-400 px-3 py-2 rounded-3xl border-gray-300 bg-transparent focus:outline-none ml-1 mt-4 placeholder-gray-500' 
                style={{ height: '40px', width: '350px',backgroundColor: 'rgba(206, 206, 206, 0.8)' }}
                required
            />
             <img src={bgIconCamera} alt="Select" className="absolute top-9 right-3 transform -translate-y-1/2 pointer-events-none" />
            </div>
            

            <div className="relative">
                <input
                    type='text'
                    id='genero'
                    value={genero}
                    placeholder='Seleccione Género..'
                    onChange={(e) => setGenero(e.target.value)}
                    className='bg-slate-400 px-3 py-2 rounded-3xl border-gray-300 bg-transparent focus:outline-none ml-1 mt-4 placeholder-gray-500' 
                    style={{ height: '40px', width: '350px',backgroundColor: 'rgba(206, 206, 206, 0.8)' }}
                    required
                />
                <img src={bgSelect} alt="Select" className="absolute top-9 right-3 transform -translate-y-1/2 pointer-events-none" />
            </div>


            <img src={btnUpdate} alt="Save" className="cursor-pointer mt-4" />

        </div>
    );
}

export default ModificarMascota; 
