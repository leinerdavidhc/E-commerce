import React,{useContext} from "react";
import { Contexto } from "../context/ContextoE";
import { Link } from "react-router-dom";

function ModalCard({InfoModal,onclose}){
    const {CrearCarrito}=useContext(Contexto)
    return(
        <div className="modalCard">
            <div className="CardModalProducto bg-gray-200">
                <div className="encabezadoModalP  flex justify-end p-1 px-2">
                <button className="bg-red-500 text-white p-1 px-3 rounded-full hover:bg-red-400" onClick={onclose}>X</button>
                </div>
                <div className="bg-white infoProduc p-2 flex flex-col gap-2">
                <img src={InfoModal.img} alt="producto"  className="w-full h-2/5"/>
                    <h3 className="text-neutral-800 text-2xl">{InfoModal.NombreProducto}</h3>
                    <span className="text-yellow-500">{InfoModal.PrecioProducto}</span>
                </div>
                <div className="acionesModal bg-white flex flex-col justify-start p-2 gap-2">
                    <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded h-12"
                    onClick={()=>{CrearCarrito(InfoModal);alert("Producto Agregado"); onclose()}}>Agregar al Carrito</button>
                    <Link to={"/E-commerce/Contactenos"}><button className="bg-blue-600 text-white w-full rounded h-12 hover:bg-blue-500">Contactar</button></Link>
                </div>
            </div>
        </div>
    );
}


export default ModalCard;