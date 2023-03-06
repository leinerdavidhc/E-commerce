import React from "react";
import Header from "../components/Header";
import HeaderR from "../components/HeaderResponsive";
import CabeceraProducto from "../components/CabeceraProducto";
import MainProductos from "../components/MainProductos";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Carrito from "../components/Carrito";
import '../style/Productos.css'

function Productos(){

    return (
        <div className="ContenedorProdutos grid grid-cols-3">
            <Header/>
            <HeaderR/>
            <CabeceraProducto/>
            <MainProductos/>
            <Aside/>
            <Footer/>
            <Carrito/>
        </div>
    )

}

export default Productos;