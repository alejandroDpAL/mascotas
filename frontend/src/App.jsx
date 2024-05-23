import { BrowserRouter, Route, Routes } from "react-router-dom"
import IniciarSesion from "./components/pages/IncioSeccion";
import AdministrarMascotas from "./components/pages/AdministrarMascotas";
import AdiccionarMascotas from "./components/pages/AdiccionarMascotas";
import ConsultarMascota from "./components/pages/ConsultarMascota";
/* import ModificarMascota from "./components/pages/ModificarMascota"; */

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IniciarSesion />} />
        <Route path="/admimascotas" element={<AdministrarMascotas />} />
        <Route path="/adicimascotas" element={<AdiccionarMascotas />} />
        <Route path="/consulmascota" element={<ConsultarMascota />} />
{/* 
        <Route path="/modimascota" element={<ModificarMascota />} /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App;
