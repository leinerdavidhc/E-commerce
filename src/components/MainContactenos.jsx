import React from "react";
import BannerContactos from "./BannerContactos";

function MainContactenos() {
  return (
    <main className="MainContactenos">
      <div className="contenedorMainConctenos p-8 flex md:flex-row flex-col items-center gap-8">
        <div className="InfoContactenos md:w-2/4 flex flex-col gap-3">
          <span className="text-lg text-gray-500">Contacte con nosotros</span>
          <h2 className="text-3xl text-neutral-800 font-semibold text-center md:text-left">
            Contáctenos
          </h2>
          <p className="text-base text-gray-500 text-justify w-4/5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, sed
            nemo labore sapiente architecto optio praesentium pariatur dolorum
            autem eveniet ab quod aperiam non, facilis unde. Delectus fuga
            doloribus voluptas.
          </p>
        </div>
        <form action="" className="Formulario md:w-2/4 w-full md:grid flex flex-col">
          <input type="text" placeholder="Nombre*" />
          <input type="email" placeholder="Email*" />
          <input type="text" placeholder="Asunto*"  className="col-span-2"/>
          <textarea
            name=""
            id=""
            cols="40"
            rows="10"
            placeholder="Mensaje"
            aria-invalid="false"
          ></textarea>
          <input type="submit" value="Enviar" />
        </form>
      </div>
      <BannerContactos/>
    </main>
  );
}
export default MainContactenos;
