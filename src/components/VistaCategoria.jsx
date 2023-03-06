import React,{useContext} from "react";
import CategoriaP from "./CategoriaP";
import { Contexto } from "../context/ContextoE";

function VistaProducto(){
    const {dato,IdCategoria}= useContext(Contexto);
  const newDato=dato.filter(elemento=>elemento.id==IdCategoria);
    return (
        <div className="MainProductos flex flex-col gap-10 py-5 md:m-8">
            {newDato.map((categoria)=>(
                <CategoriaP key={categoria.id} Nombre={categoria.nombreCategoria} Productos={categoria.Productos}/>
            ))}
        </div>
    )
}

export default VistaProducto;