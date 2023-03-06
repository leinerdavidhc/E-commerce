import React from "react";
import Header from "../components/Header";
import HeaderR from "../components/HeaderResponsive";
import Cabecera from "../components/Cabecera";
import VistaProducto from "../components/VistaCategoria";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Carrito from "../components/Carrito";
import '../style/Productos.css'

function VistaProductos(){

    return (
        <div className="ContenedorProdutos grid grid-cols-3">
            <Header/>
            <HeaderR/>
            <Cabecera/>
            <VistaProducto/>
            <Aside/>
            <Footer/>
            <Carrito/>
        </div>
    )

}

export default VistaProductos;