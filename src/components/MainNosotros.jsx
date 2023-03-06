import React from "react";
import BannerProducto from "./BannerProducto";

function MainNosotros() {
  return (
    <main className="MainNosotros">
      <div className="ContenedorDescipcion p-8 flex md:flex-row flex-col items-center gap-8">
        <div className="video md:w-2/4 flex justify-center">
        <iframe style={{width:"100%"}} height="300" src="https://www.youtube.com/embed/PQG3avQqR1E"  allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>

        <div className="DeEmpresa md:w-2/4 flex flex-col gap-3 p-2">
            <span className="text-lg text-gray-500">Nuestra Empresa</span>
            <h1 className="text-3xl text-neutral-800 font-semibold text-center">Comercializadora El Rey David</h1>
            <p className="text-base text-gray-500 text-justify md:w-4/5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam numquam non similique? Possimus voluptas earum fugit? Autem similique amet enim ea corrupti deserunt eaque alias atque exercitationem, provident hic praesentium Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, minus. ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sed.</p>
            <h2 className="text-2xl text-neutral-800 font-medium text-justify">Historia</h2>
            <p className=" text-base text-gray-500 md:w-4/5 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod a aut tenetur non quidem consequatur qui repellendus at esse ea veniam porro distinctio pariatur est vel nam, magni corporis reiciendis. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, id! adipisicing elit. Voluptas, ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, atque?</p>
        </div>
      </div>
      <div className="widget grid md:grid-cols-3 grid-cols-1 pb-10">
       <div className="wid">
       <i className="fa-solid fa-sun"></i>
       <h2>Misión</h2>
        <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum repellat, animi dolorem natus corporis voluptate officiis quibusdam quidem repellendus in id debitis excepturi praesentium, molestias esse illo dolor ullam corrupti?</p>
       </div>

       <div className="wid">
       <i className="fa-solid fa-rocket"></i>
       <h2>Visión</h2>
        <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum repellat, animi dolorem natus corporis voluptate officiis quibusdam quidem repellendus in id debitis excepturi praesentium, molestias esse illo dolor ullam corrupti?</p>
       </div>

       <div className="wid">
       <i className="fa-solid fa-book"></i>
       <h2>Valores</h2>
        <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum repellat, animi dolorem natus corporis voluptate officiis quibusdam quidem repellendus in id debitis excepturi praesentium, molestias esse illo dolor ullam corrupti?</p>
       </div>
      </div>
      <BannerProducto/>
    </main>
  );
}

export default MainNosotros;
