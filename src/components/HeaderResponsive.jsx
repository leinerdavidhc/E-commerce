import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../context/ContextoE";

function HeaderR() {
  const { Carrito,dato,setCategoriaId } = useContext(Contexto);
  const [btnBuerger, setBtnBurger] = useState(
    "burger-bar noclicked liBurger bg-neutral-800 w-7 h-1 rounded"
  );
  const [header, setHeader] = useState(
    "HeaderR bg-gray-100 flex md:hidden overflow-hidden flex-col p-2.5 h-20"
  );
  const [isMenu, setIsMenu] = useState(false);
  
  const [isDrop,setIsDrop]=useState(false)

  const [dropMenu,setDrop]=useState("bg-gray-100 p-2.5 hidden")
  const upMenu = () => {
    if (!isMenu) {
      setBtnBurger(
        "burger-bar clicked liBurger bg-neutral-800 w-7 h-1 rounded"
      );
      setHeader(
        "HeaderR bg-gray-100 flex md:hidden overflow-hidden flex-col p-2.5 h-max duration-500"
      );
    } else {
      setBtnBurger(
        "burger-bar noclicked liBurger bg-neutral-800 w-7 h-1 rounded"
      );
      setHeader(
        "HeaderR bg-gray-100 flex md:hidden overflow-hidden flex-col p-2.5 h-20"
      );
    }
    setIsMenu(!isMenu);
  };

  const upDrop=()=>{
    if(!isDrop){
      setDrop("bg-gray-100 p-2.5 flex")
    }else{
      setDrop("bg-gray-100 p-2.5 hidden")
    }
    setIsDrop(!isDrop)
  }
  return (
    /*header donde esta toda la informacion de la pagina*/
    <header className={header}>
      <div className="HeaderR-Encabezado flex items-center justify-between w-full p-2.5 gap-2">
        <Link to="/">
          <img
            src="/src/img/Logo.jpg"
            alt="Logo"
            className="Logo w-16 rounded-full cursor-pointer"
          />
        </Link>
        <div className="inputSearch w-4/5">
          <input type="text" placeholder="Escribe lo que deseas Buscar" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div
          className="burger flex flex-col gap-1 h-max w-max items-start justify-between cursor-pointer"
          onClick={upMenu}
        >
          <div className={btnBuerger}></div>
          <div className={btnBuerger}></div>
          <div className={btnBuerger}></div>
        </div>
        <button className="shopping cursor-pointer" onClick={() => Carrito()}>
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        </button>
      </div>

      <nav className="navR">
        <ul className="navRUl flex">
          <li>
            <Link className="item activo" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="item" to="/Nosotros">
              Nosotros
            </Link>
          </li>
          <li>
           <div className="li flex items-center justify-between duration-500">
           <Link to={"/Productos"}>
              Productos
            </Link>
            <i className="fa-solid fa-chevron-down" onClick={upDrop}></i>
           </div>
            <ul className={dropMenu}>
              {dato.map((Categorias) => (
                <li className="p-2" key={Categorias.id}>
                  <Link
                    className=""
                    to="/VistaProductos"
                    onClick={() => {
                      setCategoriaId(Categorias.id);
                    }}
                  >
                    {Categorias.nombreCategoria}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link className="item" to="/Contactenos">
              Contáctenos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderR;
