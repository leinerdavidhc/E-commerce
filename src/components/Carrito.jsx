import React, { useContext } from "react";
import { Contexto } from "../context/ContextoE";
import { Link } from "react-router-dom";
import ProductCarrito from "./ProductCarrito";

function Carrito() {
  const { Carrito, CarritoOpen,ProductoCarrito, TotalC} = useContext(Contexto);
  return (
    <>
      {CarritoOpen && (
        <div className="modalCarrito">
          <div className="ContenedorModalCarrito bg-gray-200 flex flex-col overflow-hidden md:w-4/5 md:h-11/12 h-4/5">
            <div className="topBorde bg-gray-200 p-2.5 flex flex-row justify-between items-center border-b-2 border-gray-300">
              <h2 className="font-semibold text-neutral-700  text-xl">
                Comercilizadora El Rey David
              </h2>
              <button
                onClick={() => {
                  Carrito();
                }}
                className="close bg-red-500 text-white p-2.5 py-1 rounded-full text-center hover:bg-red-400 hover:text-gray-200 duration-500"
              >
                X
              </button>
            </div>
            <div className="encabezadoModalCarrito w-full md:flex justify-between md:text-lg text-base md:gap-0 gap-2 hidden">
               <div className="item">
                    <span>Producto</span>
               </div>
               <div className="item">
                    <span>Precio Unitario</span>
                    <span>Cantidad</span>
                    <span>Precio total</span>
                    <span>Acciones</span>
               </div>
            </div>
            <div className="mainCarrito h-full overflow-y-scroll flex  flex-col gap-1 p-2.5">
              {ProductoCarrito.map((producto,i)=>(
                <ProductCarrito key={i} producto={producto}/>
              ))}
                  
            </div>
            <div className="footerCarrito flex justify-between p-5 items-center bg-gray-200 border-t-2 border-gray-300 gap-2.5">
               <div className="footerModalCBnt flex md:gap-5 gap-2.5">
               <Link to={"/Productos"}><button className="bg-emerald-500 hover:bg-emerald-600 duration-500 md:p-2.5 p-2 w-max text-white hover:text-gray-100 font-semibold rounded"  onClick={() => {
                  Carrito();
                }}>Mas Productos</button></Link>
                <Link to="/Contactenos" onClick={()=>{Carrito()}} className="bg-blue-700 hover:bg-blue-800 duration-500 text-white  hover:text-gray-100 w-max font-semibold md:p-2.5 p-2 text-center rounded">Mas Informacion</Link>
               </div>
               <h3 className="text-neutral-800 font-semibold text-xl">Total: $200,000</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Carrito;
