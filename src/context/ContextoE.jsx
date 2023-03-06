import { createContext, useEffect, useState } from "react";
import Categorias from "../Data/datosCategorias";
export const Contexto = createContext();

export function TagContexto(props) {
  const [dato, setDato] = useState([]);
  const [CarritoOpen, SetCarrito] = useState(false);
  const [IdCategoria, setIdCategoria] = useState(null);
  const [ProductoCarrito,setProductoCarrito]=useState([]);
  const [TotalC,setTotalC]=useState(0);
  const [Atotal,setAtotal]=useState([]);

  const Carrito = () => {
    SetCarrito(!CarritoOpen);
  };
  const setCategoriaId = (id) => {
    setIdCategoria(id);
  };

  const CrearCarrito=(ProductoC)=>{
    setProductoCarrito([...ProductoCarrito,ProductoC])
  }

  const EliminarProduct=(idP)=>{
   setProductoCarrito(ProductoCarrito.filter(p=>p.id!=idP))
  }

  const GenerarTotal=(precio)=>{
    setAtotal([...Atotal,precio])
    Atotal.forEach(elemento=>{
      setTotalC(TotalC+elemento)
    })
  }

  const scroll = () => {
    // var nav = document.querySelector("Nav");
    // var navOffset = nav.offsetTop;
    // window.onscroll = () => {
    //   if (window.pageYOffset > navOffset) {
    //     nav.classList.add("fixed");
    //   } else {
    //     nav.classList.remove("fixed");
    //   }
    // };
    console.log(" ")
  };
  useEffect(() => {
    setDato(Categorias);
    scroll();
  }, []);
  return (
    <Contexto.Provider
      value={{
        dato,
        Carrito,
        setCategoriaId,
        IdCategoria,
        CarritoOpen,
        ProductoCarrito,
        CrearCarrito,
        EliminarProduct,
        TotalC,
        GenerarTotal,
      }}
    >
      {props.children}
    </Contexto.Provider>
  );
}
