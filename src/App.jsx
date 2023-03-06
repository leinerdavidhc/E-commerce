import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Contáctenos from "./pages/Contactenos";
import Productos from "./pages/Productos";
import VistaProductos from "./pages/ProductosVista";

const App=()=>{
    return(
       <Inicio/>
    );
}

export default App;
