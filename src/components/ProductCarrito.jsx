import React, { useState,useEffect,useContext } from "react";
import { Contexto } from "../context/ContextoE";

function ProductCarrito({ producto }) {
  const [valor, setValor] = useState(1);
  const {EliminarProduct,GenerarTotal}=useContext(Contexto)
  const [PrecioTotal, setPrecioTotal] = useState(producto.PrecioProducto);
  useEffect(()=>{
    setPrecioTotal(valor*producto.PrecioProducto)
    GenerarTotal(PrecioTotal)
  },[valor])
  return (
    <div className="contenedorProdCarrito p-2.5 flex md:flex-row flex-col justify-between bg-gray-50 md:items-start items-center">
      <div className="poductoImgName flex gap-2.5 items-center md:w-2/4">
        <img src={producto.img} alt="Producto" className="w-28 h-full" />
        <h2 className="text-neutral-800 font-semibold text-base">
          {producto.NombreProducto}
        </h2>
      </div>
      <div className="productoDescripcion flex items-center gap-5">
        <span className="text-base text-neutral-600">
          ${producto.PrecioProducto}
        </span>
        <div className="inputNumber">
          <button
            className="Min"
            onClick={() => {
              if (valor >1) {
                setValor(valor - 1);
              }
            }}
          >
            -
          </button>
          <input
            type="text"
            value={valor}
            id="ICantida"
            onChange={(e) => {
            }}
          />
          <button
            className="Max"
            onClick={() => {
              setValor(valor + 1);
            }}
          >
            +
          </button>
        </div>
        <span className="text-base text-yellow-400">${parseInt(PrecioTotal).toFixed(3).toLocaleString()}</span>
        <button className="p-2.5 text-lg text-neutral-800 hover:text-red-500 duration-300" onClick={()=>EliminarProduct(producto.id)}>
          Elminar
        </button>
      </div>
    </div>
  );
}

export default ProductCarrito;
