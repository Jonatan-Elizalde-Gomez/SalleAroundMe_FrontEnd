import React, { useState } from "react";
import SalleLogo from "../../Assets/salle_logo.png";
import profilePhoto from "../../Assets/profile-photo-test.jpg";
import personasSVG from "../../Assets/personas.svg";
import plusSVG from "../../Assets/plus.svg";

const PageLayout = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const options = [
    "Usuarios",
    "Autores",
    "Categorias",
    "Jardines",
    "Extramuros",
    "Exposiciones",
    "Esculturas",
    "Edificios",
    "Auditorios",
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="h-screen flex bg-sw-main-darker font-inter">
      <div className="bg-white relative w-56 px-7 border-x-2 border-sw-main-darker">
        <img
          src={SalleLogo}
          alt="Mi Imagen"
          style={{ width: "136px", height: "46.55px" }}
          className="mt-8"
        />

        <div className="mt-20 text-sm">
          <div>
            <h3 className="text-sw-gray">General</h3>
            {options.slice(0, 3).map((item) => (
              <p
                key={item}
                className={`mt-2  p-2 rounded-lg cursor-pointer ${
                  selectedItem === item ? "bg-sw-main-lighter" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-sw-gray">Atracciones</h3>
            {options.slice(3).map((item) => (
              <p
                key={item}
                className={`mt-2 p-2 rounded-lg cursor-pointer ${
                  selectedItem === item ? "bg-sw-main-lighter" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-t-2 border-sw-main-darker text-xs flex justify-center py-5 ml-2">
          {/* Imagen circular a la izquierda */}
          <img
            src={profilePhoto}
            alt="Foto de perfil"
            className="w-7 h-7 rounded-full absolute left-4 top-4"
          />
          {/* Contenedor de texto y botón */}
          <div>
            {/* Nombre */}
            <p className="font-bold">Alfonso Cano Vargas</p>

            {/* Correo (letras más pequeñas y grises) */}
            <p className="text-[10px] text-sw-gray">alfonso@example.com</p>

            {/* Botón de Cerrar Sesión */}
            <button className="mt-2 text-[10px]">Cerrar Sesión</button>
          </div>{" "}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto border-y-2 border-sw-main-darker">
        {/* Rectángulo superior con título (fijo en la parte superior) */}
        <div className="bg-white bg-gray-border h-36 mb-4 flex flex-col justify-center sticky top-0 z-50">
          <div className="flex items-center justify-between mb-4 px-5">
            <h1 className="text-xl text-sw-black font-semibold">Jardínes</h1>
          </div>
          <div className="flex justify-between text-sm pt-4 border-t-2 border-sw-main-darker px-5">
            <button className="bg-white rounded-lg p-1 px-3 flex items-center border-2 border-sw-main-darker">
              <span className="mr-2">
                <img src={personasSVG} alt="Personas" width="15" height="15" />
              </span>
              <span className="text-sw-gray">Filtrar por autor</span>
            </button>
            <button className="bg-sw-blue rounded-lg p-1 px-3 flex items-center">
              <img
                src={plusSVG}
                alt="Plus"
                width="12"
                height="12"
                className="mr-2"
              />
              <span className="text-white">Nuevo registro</span>
            </button>
          </div>
        </div>

        {/* Espacio para contenido (con margen superior para dejar espacio al título) */}
        <div className="p-4 mt-12 rounded shadow">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
