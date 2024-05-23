import React from "react";
import { Link } from "react-router-dom";
import close from "../../../public/imgs/btn-close.jpg";
import regresar from "../../../public/imgs/atras.png";
import bgPetCamera from '../../../public/imgs/photo-lg-1.jpg';
import InfoName from '../../../public/imgs/info-name.svg';
import InfoRace from '../../../public/imgs/info-race.svg';
import InfoCategory from '../../../public/imgs/info-category.svg';
import InfoGender from '../../../public/imgs/info-gender.svg';


const ConsultarMascota = () => {

    return (
        <>
            <div className="w-full h-screen flex items-center justify-center bg-slate-800">
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
                    {/* Titulo e icono "x" */}
                    <div className="flex w-full h-10 mt-8 justify-around items-center mb-6">
                        <button className="flex rounded-full w-8 h-8 justify-center items-center ">
                            <Link to="/admimascotas">
                                <img src={regresar} alt="Regresar" className="w-full h-full rounded-full" />
                            </Link>
                        </button>
                        <div className="text-white text-lg font-bold text-center">Consultar mascotas</div>
                        <button className="w-8 h-8 rounded-full flex items-center justify-center">
                            <Link to="/admimascotas">
                                <img src={close} alt="Cerrar" className="w-full h-full rounded-full" />
                            </Link>
                        </button>
                    </div>
                    {/*  */}
                    <div className="m-4 ">
                        <img src={bgPetCamera} alt="Camera" className="cursor-pointer -mt-8 rounded-full" />
                    </div>

                    <div className='mt-4 relative'>
                        <img src={InfoName} alt="Info Name" />
                        <span className='ml-32 absolute top-3 text-slate-500'>1</span>
                    </div>


                    <div className='mt-4 relative'>

                        <img src={InfoRace} alt="Info Race" />
                        <span className='ml-32 absolute top-3 text-slate-500'>2</span>
                    </div>

                    <div className='mt-4 relative'>

                        <img src={InfoCategory} alt="Info Category" />
                        <span className='ml-32 absolute top-3 text-slate-500'>3</span>
                    </div>

                    <div className='mt-4 relative'>
                        <Link to="/admimascotas">
                            <img src={InfoGender} alt="Info Gender" />
                        </Link>
                        <span className='ml-32 absolute top-3 text-slate-500'>4</span>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ConsultarMascota