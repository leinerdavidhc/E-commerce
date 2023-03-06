import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Contexto} from '../context/ContextoE'

function DropdownMenu() {
  const {dato,setCategoriaId}= useContext(Contexto);
  return (
    <ul className="dropdown-menu absolute top-6 bg-gray-100">
      {dato.map((Categorias) => (
        <li className="px-2 py-1 dropItem" key={Categorias.id}>
          <Link className="enlaces" to="/VistaProductos" onClick={()=>{setCategoriaId(Categorias.id)}}>
            {Categorias.nombreCategoria}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
