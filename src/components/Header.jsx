import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header() {
  return (
    /*header donde esta toda la informacion de la pagina*/
    <header className="Header flex-col hidden md:flex">
      <div className="Nav-Info w-full p-2.5 px-24 flex justify-between items-center">
        <div className="horario flex items-center gap-2">
          <i className="fa-regular fa-clock text-zinc-900"></i>
          <span> Horario de atención: Lun - Vie : 8:00 am a 5:00 pm</span>
        </div>
        <div className="social flex items-center gap-2.5 text-2xl">
          <i className="fa-brands fa-square-whatsapp"></i>
          <i className="fa-brands fa-square-facebook"></i>
        </div>
      </div>

      <div className="Nav-ContactosInfo w-full bg-gray-100 p-2 px-24 flex justify-around items-center">
        <Link to="/E-commerce/">
        <img
          src="/E-commerce/assets/Logo-0a60b9e7.jpg"
          alt="Logo"
          className="Logo w-28 rounded-full cursor-pointer"
        />
        </Link>
        <div className="ContactosInfo flex w-4/5 justify-around items-center gap-2">
          <div className="Li-Contacto">
            <i className="fa-solid fa-phone"></i>
            <div className="ItemConctacto">
              <h2>+57 3207436623</h2>
              <span>Llámenos</span>
            </div>
          </div>

          <div className="Li-Contacto">
          <i className="fa-solid fa-envelope"></i>
            <div className="ItemConctacto">
              <h2>ElReyDavid@gmail.com</h2>
              <span>Escribanos!</span>
            </div>
          </div>

          <div className="Li-Contacto">
          <i className="fa-solid fa-location-dot"></i>
            <div className="ItemConctacto">
              <h2>Ubicaciones</h2>
              <span>direcion fisica</span>
              <span>calle 1 via local</span>
            </div>
          </div>
        </div>
      </div>
      <Nav/>
    </header>
  );
}

export default Header;
