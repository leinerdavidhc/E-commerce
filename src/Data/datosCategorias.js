const Agropecuario = {
  id: 1,
  nombreCategoria: "Agropecuario",
  Productos: [
    /*Especies Menores*/
    {
      NombreProducto: "Pollos De Engorde",
      Precio: 20.0,
      subCategoria: "Especies Menores",
      id:11,
    },
    {
      NombreProducto: "Gallina Ponedoras",
      Precio: 30.0,
      subCategoria: "Especies Menores",
      id:12,
    },

    /*Alimentos de especies Menores*/

    {
      NombreProducto: "Alimento Pollo de Engorde",
      Precio: 20.0,
      subCategoria: "Alimentos Especies Menores",
      id:13
    },
    {
      NombreProducto: "Alimento Gallina Ponedora",
      Precio: 30.0,
      subCategoria: "Alimentos Especies Menores",
      id:14,
    },
    /*MEDICINA Y SALUBRIDAD DE ESPECIES MENORES*/

    /*INSUMOS AGRICOLAS*/
    {
      NombreProducto: "Fertilizantes",
      Precio: 20.0,
      subCategoria: "Insumos Agricolas",
      id:15,
    },
    {
      NombreProducto: "Hidropondía",
      Precio: 30.0,
      subCategoria: "Insumos Agricolas",
      id:16,
    },

    /*Infraestructura Rural */

    {
      NombreProducto: "Balanzas Y Básculas",
      Precio: 60.0,
      subCategoria: "Infraestructura Rural",
      id:17,
    },
    {
      NombreProducto: "Bombas",
      Precio: 60.0,
      subCategoria: "Infraestructura Rural",
      id:18,
    },
  ],
};

const Tecnologia = {
  id: 2,
  nombreCategoria: "Tecnologia",
  Productos: [
    {
      NombreProducto: "Computador de mesa",
      Precio: 20.0,
      subCategoria: "",
      id:21,
    },
    {
      NombreProducto: "Almacenamientos",
      Precio: 30.0,
      subCategoria: "",
      id:22,
    },
    {
      NombreProducto: "Portatiles",
      Precio: 50.0,
      subCategoria: "",
      id:23,
    },
    {
      NombreProducto: "Pantallas",
      Precio: 60.0,
      subCategoria: "",
      id:24,
    },
    {
      NombreProducto: "Camaras",
      Precio: 20.0,
      subCategoria: "",
      id:25,
    },
    {
      NombreProducto: "Proyectores",
      Precio: 30.0,
      subCategoria: "",
      id:26,
    },
    {
      NombreProducto: "Impresora",
      Precio: 50.0,
      subCategoria: "",
    },
    {
      NombreProducto: "Accesorios",
      Precio: 60.0,
      subCategoria: "",
      id:27,
    },
  ],
};

const AlimentosNoPerecederos = {
  id: 3,
  nombreCategoria: "Alimentos No Perecederos",
  Productos: [
    {
      NombreProducto: "Alimentos No Perecederos",
      Precio: 20.0,
      subCategoria: "",
      id:31,
    },
    {
      NombreProducto: "Alimentos No Perecederos",
      Precio: 20.0,
      subCategoria: "",
      id:32,
    },
    {
      NombreProducto: "Alimentos No Perecederos",
      Precio: 20.0,
      subCategoria: "",
      id:33,
    },
  ],
};

const GeneradoresDeEnergia = {
  id: 4,
  nombreCategoria: "Generadores de Energia",
  Productos: [
    {
      NombreProducto: "Generadores De Energia",
      Precio: 20.0,
      subCategoria: "",
      id:41,
    },
    {
      NombreProducto: "Paneles Solares",
      Precio: 20.0,
      subCategoria: "",
      id:42,
    },
    {
      NombreProducto: "Plantas Electricas",
      Precio: 20.0,
      subCategoria: "",
      id:43,
    },
  ],
};

const MaquinariaPesada = {
  id: 5,
  nombreCategoria: "Maquinaria Pesada",
  Productos: [
    {
      NombreProducto: "Maquinaria Pesada",
      Precio: 20.0,
      subCategoria: "",
      id:51,
    },

    {
      NombreProducto: "Maquinaria Pesada",
      Precio: 20.0,
      subCategoria: "",
      id:52,
    },
    {
      NombreProducto: "Maquinaria Pesada",
      Precio: 20.0,
      subCategoria: "",
      id:53,
    },
  ],
};

const ArticulosDeFerreteria = {
  id: 6,
  nombreCategoria: "Articulos de Ferreteria",
  Productos: [
    { 
      NombreProducto: "Articulos De Ferreteria", Precio: 20.0, subCategoria: "" ,id:61,
    },
    { 
      NombreProducto: "Articulos De Ferreteria", Precio: 20.0, subCategoria: "" ,id:62,
    },
    { 
      NombreProducto: "Articulos De Ferreteria", Precio: 20.0, subCategoria: "" ,id:63,
    },
  ],
};

const Electrodomesticos = {
  id: 7,
  nombreCategoria: "Electrodomesticos",
  Productos: [
    { 
      NombreProducto: "Refrigeracion", Precio: 20.0, subCategoria: "" ,id:71,
    },
    { 
      NombreProducto: "Licuadoras", Precio: 20.0, subCategoria: "" ,id:72,
    },
    { 
      NombreProducto: "Aires Acondicionados", Precio: 20.0, subCategoria: "" ,id:73,
    },
  ],
};


const Categorias = [
  Agropecuario,
  Tecnologia,
  AlimentosNoPerecederos,
  GeneradoresDeEnergia,
  MaquinariaPesada,
  ArticulosDeFerreteria,
  Electrodomesticos,
];

export default Categorias;
