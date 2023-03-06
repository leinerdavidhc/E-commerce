import React,{useContext} from "react";
import ContenedorCategoria from "./ContenedorCategoria";
import { Contexto } from "../context/ContextoE";

function MainProductos(){
    const {dato}=useContext(Contexto);
    return (
        <div className="MainProductos flex flex-col gap-10 py-5 md:m-8">
            {dato.map((categoria)=>(
                <ContenedorCategoria key={categoria.id} Nombre={categoria.nombreCategoria} Productos={categoria.Productos} Id={categoria.id}/>
            ))}
        </div>
    )
}

export default MainProductos;