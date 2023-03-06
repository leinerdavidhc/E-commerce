import React from "react";
import Header from "../components/Header";
import HeaderR from "../components/HeaderResponsive";
import CabeceraContactenos from "../components/CabeceraContactenos";
import MainContactenos from "../components/MainContactenos";
import AsideContactenos from "../components/AsideContactenos";
import Footer from "../components/Footer";
import '../style/Contactenos.css'
import Carrito from "../components/Carrito";


function Contáctenos(){
    return(
        <div className="ContenedorContactenos grid grid-cols-3">
            <Header/>
            <HeaderR/>
            <CabeceraContactenos/>
            <MainContactenos/>
            <AsideContactenos/>
            <Footer/>
            <Carrito/>
        </div>
    );
}

export default Contáctenos;