import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Contáctenos from "./pages/Contactenos";
import Productos from "./pages/Productos";
import VistaProductos from "./pages/ProductosVista";

const App=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Inicio/>}/>
                <Route path="/Nosotros" element={<Nosotros/>}/>
                <Route path="/Contactenos" element={<Contáctenos/>}/>
                <Route path="/Productos" element={<Productos/>}/>
                <Route path="/VistaProductos" element={<VistaProductos/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
