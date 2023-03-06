import React from "react";
import BannerProducto from "./BannerProducto";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="Main flex flex-col">
      <div className="bannerInfo grid md:grid-cols-3 grid-cols-1 grid-rows-1 w-full bg-red-300">
        <div className="Productos duration-500">
          <div className="titulo">
            <h4>Productos</h4>
            <h2>Lo que ofrecemos</h2>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            laudantium sequi iure corporis! Vero excepturi magnam at, rerum,
            quod deleniti deserunt id odit, illo doloremque sequi possimus ipsam
            mollitia maiores?
          </p>
          <Link to={"/E-commerce/Productos"}><button>Ver Más</button></Link>
        </div>

        <div className="Nosotros bg-blue-600 hover:bg-blue-900 duration-500">
          <div className="titulo">
            <h4>Nosotros</h4>
            <h2>El Rey David</h2>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            laudantium sequi iure corporis! Vero excepturi magnam at, rerum,
            quod deleniti deserunt id odit, illo doloremque sequi possimus ipsam
            mollitia maiores?
          </p>
          <Link to={"/E-commerce/Nosotros"}><button>Ver Más</button></Link>
        </div>

        <div className="Conctacto bg-emerald-500 hover:bg-emerald-800 duration-500">
          <div className="titulo">
            <h4>Contactos</h4>
            <h2>Contacta con nosotros</h2>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            laudantium sequi iure corporis! Vero excepturi magnam at, rerum,
            quod deleniti deserunt id odit, illo doloremque sequi possimus ipsam
            mollitia maiores?
          </p>
          <Link to={"/E-commerce/Contactenos"}><button>Ver Más</button></Link>
        </div>
      </div>
      <BannerProducto/>
    </main>
  );
}

export default Main;
