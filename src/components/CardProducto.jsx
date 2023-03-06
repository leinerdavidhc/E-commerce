import React, { useContext, useState } from "react";
import ModalCard from "./ModalCard";

function CardProductos({ productoData }) {

  const [isOpen, setIsOpen] = useState(false);
  const Open = () => {
    setIsOpen(true);
  };
  const Close = () => {
    setIsOpen(false);
  };
  const Producto = {
    NombreProducto: productoData.NombreProducto,
    PrecioProducto: productoData.Precio.toFixed(3).toLocaleString(),
    img: "https://static.vecteezy.com/system/resources/previews/000/703/065/non_2x/young-pig-photo.jpg",
    id:productoData.id
  };
  return (
    <>
      <div className="card">
        <img
          className="containerImg w-full h-2/4"
          src="https://static.vecteezy.com/system/resources/previews/000/703/065/non_2x/young-pig-photo.jpg"
          alt="Imagen Producto"
        />

        <div className="info h-2/4 p-2.5 flex flex-col justify-around ">
          <h3 className="NombreP md:text-xl text-lg text-center md:text-left text-neutral-800">
            {productoData.NombreProducto}
          </h3>
          <span className="text-base text-yellow-500">
            {productoData.Precio.toFixed(3).toLocaleString()}$
          </span>
          <a className="BTNIte md:w-full w-4/5 self-center" onClick={Open}>Me interesa</a>
        </div>
      </div>
      {isOpen&&<ModalCard InfoModal={Producto} onclose={Close}/>}
    </>
  );
}

export default CardProductos;
