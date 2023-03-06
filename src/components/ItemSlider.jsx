import React, { useContext } from "react";
import { Link } from "react-router-dom";


function ItemSlider({categoria,setCategoriaId}) {
 
  return (
    <Link to={"/Productos"} onClick={()=>{setCategoriaId(categoria.id)}}  className="itemSlider flex-shrink-0 flex-grow-0 basis-full md:text-4xl text-2xl font-bold snap-start h-full rounded-lg">
        <div>{categoria.nombreCategoria}</div>
    </Link>
  );
}

export default ItemSlider;
