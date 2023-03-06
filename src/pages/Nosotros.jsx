import React from "react";
import Header from "../components/Header";
import HeaderR from "../components/HeaderResponsive";
import CabeceraNosotros from "../components/CabeceraNosotros";
import MainNosotros from "../components/MainNosotros";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Carrito from "../components/Carrito";
import '../style/Nosotros.css'

function Nosotros(){

    return (
        <div className="ContenedorNosotros grid grid-cols-3">
            <Header/>
            <HeaderR/>
            <CabeceraNosotros/>
            <MainNosotros/>
            <Aside/>
            <Footer/>
            <Carrito/>
        </div>
    )

}

export default Nosotros;