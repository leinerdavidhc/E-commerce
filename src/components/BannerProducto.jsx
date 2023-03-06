import React from "react";
import { Link } from "react-router-dom";

function BannerProducto() {
  return (
    <div className="BannerProducto w-full flex md:flex-row flex-col p-4 md:gap-0 gap-10">
      <div className="bannerProductosI md:w-2/4 flex flex-col gap-10 justify-center md:items-start items-center">
        <div className="titleBanner flex flex-col gap-2 md:items-start items-center">
          <h4 className="text-gray-500 text-2xl">Productos</h4>
          <h2 className="text-zinc-800 text-3xl font-semibold text-center">
            Productos de la mejor calidad
          </h2>
        </div>
        <div className="bannerdescripcion flex flex-col gap-4">
          <p className="text-gray-500 text-base md:text-left text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab
            saepe doloribus nihil sapiente excepturi impedit expedita ea,
            quisquam facilis odit quod unde quia eveniet accusantium ratione
            quam aperiam aliquid!
          </p>

          <p className="text-gray-500 text-base md:text-left text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
            consequuntur?
          </p>
        </div>
        <Link to={"/Productos"}><button className="bg-yellow-400 text-zinc-800 w-max p-2.5 rounded hover:bg-yellow-500 text-lg font-semibold ">
          Ver Productos
        </button></Link>
      </div>
      <div className="bannerProductosD md:w-2/4">
        <a href="#">
          <img
            src="https://images.pexels.com/photos/13638561/pexels-photo-13638561.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="producto1"
          />
        </a>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/10141309/pexels-photo-10141309.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="producto2"
          />
        </a>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/12560939/pexels-photo-12560939.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="producto3"
          />
        </a>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="producto4"
          />
        </a>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/59821/lamb-spring-nature-animal-59821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="producto5"
          />
        </a>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/678444/pexels-photo-678444.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="producto6"
          />
        </a>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/2148933/pexels-photo-2148933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="producto7"
          />
        </a>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/977239/pexels-photo-977239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="producto8"
          />
        </a>
        <a href="#">
          <img
            src="https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="producto9"
          />
        </a>
      </div>
    </div>
  );
}

export default BannerProducto;
