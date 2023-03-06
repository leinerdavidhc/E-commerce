import React,{useContext} from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdowMenu";
import { Contexto } from "../context/ContextoE";


function Nav() {
  const {Carrito}=useContext(Contexto)
  return (
    <nav className="Nav w-full p-4 flex  items-center justify-between lg:px-32 md:px-20 gap-10">
      <ul className="navUl flex gap-4  relative">
        <li className="Enlaces">
          <Link className="item activo" to="/E-commerce/">
            Inicio
          </Link>
        </li>
        <li className="Enlaces">
          <Link className="item" to="/E-commerce/Nosotros">
            Nosotros
          </Link>
        </li>
        <li className="Enlaces producto">
          <Link className="item" to={"/E-commerce/Productos"}>Productos </Link>
          <i className="fa-solid fa-chevron-down"></i>
          <DropdownMenu />
        </li>
        <li className="Enlaces">
          <Link className="item" to="/E-commerce/Contactenos">
            Contáctenos
          </Link>
        </li>
      </ul>
      <div className="inputSearch md:w-96">
        <input
          type="text"
          placeholder="Escribe lo que deseas Buscar"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <button className="shopping cursor-pointer" onClick={()=>Carrito()}><i className="fa-sharp fa-solid fa-cart-shopping"></i></button>
    </nav>
  );
}

export default Nav;
