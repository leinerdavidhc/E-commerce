import React,{useContext} from "react";
import ItemSlider from "./ItemSlider";
import {Contexto} from '../context/ContextoE'

function AsideContactenos() {
  const {dato,setCategoriaId}= useContext(Contexto);
  return (
    <div className="slider flex justify-center items-center overflow-x-scroll scroll-p-5 scroll-smooth snap-x snap-mandatory gap-3 cursor-pointer my-8 mx-auto p-5">
      {dato.map((categoria,i)=>(<ItemSlider key={i} categoria={categoria} setCategoriaId={setCategoriaId}/>))}
    </div>
  );
}

export default AsideContactenos;
