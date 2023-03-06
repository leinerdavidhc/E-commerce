import React,{useContext} from "react";
import { Contexto } from "../context/ContextoE";
import CardProductos from "./CardProducto";
import { Link } from "react-router-dom";

function ContenedorCategoria({ Nombre, Productos, Id }){
    const { setCategoriaId } = useContext(Contexto);
    return (
        <div className="ContenedorCategoria flex flex-col gap-5 p-2.5 bg-gray-100">
            <h2 className="text-3xl text-neutral-800">{Nombre}</h2>
            <div className="ContenedorCard p-2.5 md:flex bg-gray-50 grid grid-cols-2">
                {
                    Productos.map((prdoucto,i)=>{
                        if(i<=3){
                            return <CardProductos key={i} productoData={prdoucto}/>
                        }
                    })
                }
            </div>
           <Link to={"/E-commerce/VistaProductos"}><button onClick={()=>{setCategoriaId(Id)}} className="BTNVermas">Ver Mas</button></Link> 
        </div>
    );
}

export default ContenedorCategoria;