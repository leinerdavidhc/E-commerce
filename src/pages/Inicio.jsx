import React from "react";
import Header from "../components/Header";
import HeaderR from "../components/HeaderResponsive";
import Cabecera from "../components/Cabecera";
import Main from "../components/Main";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Carrito from "../components/Carrito";


function Contenedor(){

    return (
        <div className="Contenedor grid grid-cols-3">
            <Header/>
            <HeaderR/>
            <Cabecera/>
            <Main/>
            <Aside/>
            <Footer/>
            <Carrito/>
        </div>
    )

}

export default Contenedor;