import React, { useState } from "react";
import salleLogo from "../../../assets/salle_logo.png";
import profilePhoto from "../../../assets/profile_photo_test.jpg";
import personasSVG from "../../../assets/people_icon.svg";
import plusSVG from "../../../assets/plus_icon.svg";
import menuButton from "../../../assets/menu_button.svg";
import { useNavigate } from "react-router-dom";
import AttractiveModal from '../../../components/basic/forms/AttractiveModal';
import CategoryModal from '../../../components/basic/forms/CategoryModal';
import UserModal from '../../../components/basic/forms/UserModal';

const PageLayout = ({ children, handleSelect }) => {
  const [selectedItem, setSelectedItem] = useState("Usuarios");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [modalAttractive, setModalAttractiveVisible] = useState(false);
  const [modalCategory, setModalCategoryVisible] = useState(false);
  const [modalUser, setModalUserVisible] = useState(false);  const navigate = useNavigate(); // Obtiene la función de navegación

  const attractiveOptions = ["Jardines", "Extramuros", "Exposiciones", "Esculturas", "Edificios", "Auditorios"];
  const name = localStorage.getItem("name").slice(1, -1);

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

  const handleCerrarModalAttractive = () => {
    setModalAttractiveVisible(false);
  };
  const handleCerrarModalCategory = () => {
    setModalCategoryVisible(false);
  };
  const handleCerrarModalUser = () => {
    setModalUserVisible(false);
  };

  const handleOpenAddModal = () => {

    if(attractiveOptions){
      if (attractiveOptions.includes(selectedItem)) {
        setModalAttractiveVisible(true);
      } else if (selectedItem === "Categorias") {
        setModalCategoryVisible(true);
      } else if (selectedItem === "Usuarios") {
        setModalUserVisible(true);
      }
    }

  };

  const handleItemClick = (item) => {
    handleSelect(item)
    setSelectedItem(item);
    console.log(item)
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    navigate("/login")
  }

  return (
    <>
          {modalAttractive && <AttractiveModal onClose={handleCerrarModalAttractive} />}
      {modalCategory && <CategoryModal onClose={handleCerrarModalCategory} />}
      {modalUser && <UserModal onClose={handleCerrarModalUser} />}
      <div className="fixed bottom-6 right-6">
        <button onClick={handleOpenAddModal} className="w-16 h-16 rounded-full bg-sw-blue text-white text-lg flex items-center justify-center shadow-lg">
          <img
            src={plusSVG}
            alt="Plus"
            width="30"
            height="30"
          />
        </button>
      </div>

      {/* Sidebar Mask */}
      {sidebarVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      <div className="h-screen flex bg-sw-main-darker font-inter">
        {/* Sidebar */}

        <div
          className={`fixed lg:block bg-white lg:relative top-0 right-0 lg:w-56 w-60 h-full px-7 border-x-2 border-sw-main-darker z-50 ${
            sidebarVisible ? "block" : "hidden"
          }`}
        >
          <img
            src={salleLogo}
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
          <div className="absolute bottom-0 left-0 w-full border-t-2 border-sw-main-darker text-xs flex justify-left py-5 pl-8">
            {/* Imagen circular a la izquierda */}
            {/* Contenedor de texto y botón */}
            <div>
              {/* Nombre */}
              <p className="font-bold">{name}</p>

              {/* Correo (letras más pequeñas y grises) */}
              <p className="text-[10px] text-sw-gray">alfonso@example.com</p>

              {/* Botón de Cerrar Sesión */}
              <button className="mt-2 text-[10px]" onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto border-y-2 border-sw-main-darker">
          {/* Rectángulo superior con título (fijo en la parte superior) */}
          <div className="bg-white bg-gray-border border-sw-main-darker h-24 lg:h-36 border-b flex flex-col justify-center sticky top-0 z-30">
            <div className="flex items-center justify-between lg:mb-4 px-7 lg:px-5">
              <h1 className="text-xl text-sw-black font-semibold">
                {selectedItem}
              </h1>
              <button className="lg:hidden " onClick={toggleSidebar}>
                <img
                  src={menuButton}
                  alt="menú button"
                  width="30"
                  height="30"
                />
              </button>
            </div>
            <div className="hidden lg:flex justify-between text-sm pt-4 border-t-2 border-sw-main-darker px-5">
              <button className="bg-white rounded-lg p-1 px-3 flex items-center border-2 border-sw-main-darker">
                <span className="mr-2">
                  <img
                    src={personasSVG}
                    alt="Personas"
                    width="15"
                    height="15"
                  />
                </span>
                <span className="text-sw-gray">Filtrar por autor</span>
              </button>
              <button onClick={handleOpenAddModal} className="bg-sw-blue rounded-lg p-1 px-3 flex items-center">
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
          <div className="lg:p-4 rounded shadow">{children}</div>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
