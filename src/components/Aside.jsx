import React from "react";
import { Link } from "react-router-dom";

function Aside(){
    return(
        <aside className="Aside flex flex-col justify-center items-center gap-2 text-zinc-900">
            <h3 className="text-lg md:text-xl font-semibold">Comercializdora de productos de calidad</h3>
            <h2 className="text-2xl md:text-3xl text-yellow-500 font-bold">Comercializadora El Rey David</h2>
            <p className="md:w-2/4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fuga voluptatem repellat assumenda modi suscipit culpa dolorum hic dignissimos, ex nesciunt laborum, impedit cum pariatur? Iusto aliquid minus molestiae dignissimos?
                </p>
           <Link to={"/E-commerce/Contactenos"}><button className="bg-yellow-400 text-zinc-800 w-max p-2.5 rounded hover:bg-yellow-500 text-lg font-semibold">Mas Informacion</button></Link>
        </aside>
    );
}

export default Aside;