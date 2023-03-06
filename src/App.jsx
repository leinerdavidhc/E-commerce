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
                <Route index path="/E-commerce/" element={<Inicio/>}/>
                <Route path="/E-commerce/Nosotros" element={<Nosotros/>}/>
                <Route path="/E-commerce/Contactenos" element={<Contáctenos/>}/>
                <Route path="/E-commerce/Productos" element={<Productos/>}/>
                <Route path="/E-commerce/VistaProductos" element={<VistaProductos/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
