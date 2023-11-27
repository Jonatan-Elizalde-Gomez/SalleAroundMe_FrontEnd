import React, { useState }  from "react";
import deleteIcon from "../../../assets/delete_icon.svg";
import editIcon from "../../../assets/edit_icon.svg";
import AttractiveModal from "../../../components/basic/forms/AttractiveModal";
import CategoryModal from "../../../components/basic/forms/CategoryModal";
import UserModal from "../../../components/basic/forms/UserModal";
import AuthorModal from "../../../components/basic/forms/AuthorModal";
import TecniqueModal from "../../../components/basic/forms/TecniqueModal";
import MaterialModal from "../../../components/basic/forms/MaterialModal";
import StyleModal from "../../../components/basic/forms/StyleModal";

export default function CardButtons({ data, selectedCard }) {
  const [modalAttractive, setModalAttractiveVisible] = useState(false);
  const [modalCategory, setModalCategoryVisible] = useState(false);
  const [modalUser, setModalUserVisible] = useState(false);
  const [modalAuthor, setModalAuthorVisible] = useState(false);
  const [modalTecnique, setModalTecniqueVisible] = useState(false);
  const [modalMaterial, setModalMaterialVisible] = useState(false);
  const [modalStyle, setModalStyleVisible] = useState(false);


  const handleOpenAddModal = () => {
    console.log(selectedCard, data);
    if (selectedCard === "Categorias") {
      setModalCategoryVisible(true);
    } else if (selectedCard === "Usuarios") {
      setModalUserVisible(true);
    } else if (selectedCard === "Autores") {
      setModalAuthorVisible(true);
    } else if (selectedCard === "Tecnicas") {
      setModalTecniqueVisible(true);
    } else if (selectedCard === "Materiales") {
      setModalMaterialVisible(true);
    } else if (selectedCard === "Estilos") {
      setModalStyleVisible(true);
    } else {
      setModalAttractiveVisible(true);
    }
  };

  const handleCerrarModalAttractive = () => {
    setModalAttractiveVisible(false);
  };
  const handleCerrarModalCategory = () => {
    setModalCategoryVisible(false);
  };
  const handleCerrarModalUser = () => {
    setModalUserVisible(false);
  };

  const handleCerrarModalAuthor = () => {
    setModalAuthorVisible(false);
  };

  const handleCerrarModalTecnique = () => {
    setModalTecniqueVisible(false);
  };

  const handleCerrarModalMaterial = () => {
    setModalMaterialVisible(false);
  };

  const handleCerrarModalStyle = () => {
    setModalStyleVisible(false);
  };

  return (
    <div className="inline-flex gap-3 text-neutral-500 font-medium items-end">
      <div className="flex items-center rounded-lg border border-sw-main-darker bg-white h-fit px-4 cursor-pointer">
        <img src={deleteIcon} alt="Icono" /> <p className="pl-2">Eliminar</p>
      </div>
      <div onClick={handleOpenAddModal} className="flex items-center rounded-lg border border-sw-main-darker bg-white h-fit px-4 cursor-pointer">
        <img src={editIcon} alt="Icono" />
        <p className="pl-2">Editar</p>
      </div>
      {modalAttractive && (
        <AttractiveModal onClose={handleCerrarModalAttractive} data={data}/>
      )}
      {modalCategory && <CategoryModal onClose={handleCerrarModalCategory} data={data}/>}
      {modalUser && <UserModal onClose={handleCerrarModalUser} data={data}/>}
      {modalAuthor && <AuthorModal onClose={handleCerrarModalAuthor} data={data}/>}
      {modalTecnique && <TecniqueModal onClose={handleCerrarModalTecnique} data={data}/>}
      {modalMaterial && <MaterialModal onClose={handleCerrarModalMaterial} data={data}/>}
      {modalStyle && <StyleModal onClose={handleCerrarModalStyle} data={data}/>}
    </div>
  );
}
