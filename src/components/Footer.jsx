import React from "react";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer className="Footer bg-neutral-900 flex flex-col justify-between">
      <div className="infoFooter grid md:grid-cols-4 grid-cols-1 gap-8 py-8 px-4">
        <div className="ContenedorNostros text-gray-300 flex flex-col gap-4 justify-center md:items-center">
          <Link to={"/"}>
          <img
            src="/src/img/Logo.jpg"
            alt="Logo"
            className="Logo w-28 rounded-full"
          />
          </Link>
          <p className="text-justify text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel
            ex modi, quae magnam dignissimos reprehenderit sapiente delectus
            amet, porro accusamus velit fuga. Suscipit impedit, quas ipsa
          </p>
        </div>

        <div className="redes flex flex-col md:items-center justify-around">
            <h2 className="text-xl md:text-2xl">Redes</h2>
            <ul className="ContenedorRedes">
                <li><a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                <li><a href="#"><i className="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
            </ul>
        </div>

        <div className="Enlaces flex flex-col md:items-center justify-around">
            <h2 className="text-xl md:text-2xl">Enlaces</h2>
            <ul className="conctnedorEnlaces">
                <li><Link to={"/E-commerce/"}>Inicio</Link></li>
                <li><Link to={"/E-commerce/Nosotros"}>Nosotros</Link></li>
                <li><Link to={"/E-commerce/Productos"}>Productos</Link></li>
                <li><Link to={"/E-commerce/Contactenos"}>Conctáctenos</Link></li>
            </ul>
        </div>

        <div className="Contáctenos">
            <h2 >Contáctenos</h2>
            <p><i className="fa-solid fa-location-dot"></i> Aqui la localizacion del lugar fisico donde esta cllae 3 via rural</p>

            <span><i className="fa-solid fa-phone"></i> +57 3124567688 <br /></span>
            <span><i className="fa-solid fa-envelope"></i> Reydavid@gmail.com</span>
        </div>
      </div>
      <div className="derechos bg-black flex justify-center items-center">
        <h3 className="text-white text-center md:text-base text-sm pt-1">
          2023 Todos los derechos reservados El Rey David
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
