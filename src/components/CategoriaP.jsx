import React,{useContext} from "react";
import { Contexto } from "../context/ContextoE";
import CardProductos from "./CardProducto";

function CategoriaP({ Nombre, Productos}){
    return (
        <div className="ContenedorCategoria flex flex-col gap-5 p-2.5 bg-gray-100">
            <h2 className="text-3xl text-neutral-800">{Nombre}</h2>
            <div className="ContenedorCard p-2.5 md:flex bg-gray-50 grid grid-cols-2">
                {
                    Productos.map((prdoucto,i)=>(

                    <CardProductos key={i} productoData={prdoucto}/>
                        
                    ))
                }
            </div>
        </div>
    );
}

export default CategoriaP;