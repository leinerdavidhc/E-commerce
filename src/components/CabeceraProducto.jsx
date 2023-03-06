import React from "react";
import { Link } from "react-router-dom";

function CabeceraProducto(){
    return(
        <div className="Cabecera">
            <h1 className="md:text-3xl text-2xl">Comercializadora El Rey David</h1>
            <p className="text-center md:w-3/5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique molestiae explicabo sequi a cum nihil nisi nam dolorem odio unde corrupti labore neque consequatur mollitia aliquid id quo, non voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto adipisci qui quae, delectus magnam distinctio asperiores ea enim hic at dolores optio alias in veritatis animi repellat sequi numquam. Sequi.</p>
            <Link to={"/E-commerce/Contactenos"}><button>Contactenos</button></Link>
        </div>
    );
}

export default CabeceraProducto;