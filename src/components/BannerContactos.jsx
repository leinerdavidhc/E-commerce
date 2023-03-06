import React from "react";

function BannerContactos(){
    return(
        <div className="bannerConactos grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-10 justify-items-center w-full p-2.5">
            <div className="itemInfo">
            <i className="fa-solid fa-location-dot"></i>
                <h2>Dirección</h2>
                <span>aqui va un direcion de fisica</span>
                <span>Barrio av 1 direccion 13#5</span>
            </div>
            <div className="itemInfo">
            <i className="fa-solid fa-phone"></i>
                <h2>Teléfono</h2>
                <span>31244556678</span>
                <span>31297652234</span>
            </div>
            <div className="itemInfo">
            <i className="fa-solid fa-envelope"></i>
                <h2>Email</h2>
                <span>ElReydavid@gmail.com</span>
            </div>
        </div>
    );
}

export default BannerContactos;