import React, { useState } from "react";
import deleteIcon from "../../../assets/delete_icon.svg";
import editIcon from "../../../assets/edit_icon.svg";
import AttractiveModal from "../../../components/basic/forms/AttractiveModal";
import CategoryModal from "../../../components/basic/forms/CategoryModal";
import UserModal from "../../../components/basic/forms/UserModal";
import AuthorModal from "../../../components/basic/forms/AuthorModal";
import TecniqueModal from "../../../components/basic/forms/TecniqueModal";
import MaterialModal from "../../../components/basic/forms/MaterialModal";
import StyleModal from "../../../components/basic/forms/StyleModal";
import DeleteModal from "../modal/deleteModal";
import { deleteAttractionService, deleteAuthorService, deleteCategoryService, deleteMaterialService, deleteStyleService, deleteTecniqueService, deleteUserService } from "../../utils/Services";

export default function CardButtons({ data, selectedCard, fetchData }) {
  const handleFetchData = () => {fetchData()}
  const [modalAttractive, setModalAttractiveVisible] = useState(false);
  const [modalCategory, setModalCategoryVisible] = useState(false);
  const [modalUser, setModalUserVisible] = useState(false);
  const [modalAuthor, setModalAuthorVisible] = useState(false);
  const [modalTecnique, setModalTecniqueVisible] = useState(false);
  const [modalMaterial, setModalMaterialVisible] = useState(false);
  const [modalStyle, setModalStyleVisible] = useState(false);
  //delete
  const [modalDelete, setModalDeleteVisible] = useState(false);

  const handleDelete = () => {
    if (selectedCard === "Categorias") {
      if (data) {
        deleteCategoryService(data.id);
        handleFetchData()
      }
    } else if (selectedCard === "Usuarios") {
      if (data) {
        deleteUserService(data.user_id);
        handleFetchData()
      }
    } else if (selectedCard === "Autores") {
      if (data) {
        deleteAuthorService(data.id);
        handleFetchData()
      }
    } else if (selectedCard === "Tecnicas") {
      if (data) {
        deleteTecniqueService(data.id);
        handleFetchData()
      }
    } else if (selectedCard === "Materiales") {
      if (data) {
        deleteMaterialService(data.id);
        handleFetchData()
      }
    } else if (selectedCard === "Estilos") {
      if (data) {
        deleteStyleService(data.id);
        handleFetchData()
      }
    } else {
      if (data) {
        deleteAttractionService(data.id);
        handleFetchData()
      }
    }
  }

  const handleOpenAddModal = () => {
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
      <div
        onClick={() => setModalDeleteVisible(true)}
        className="flex items-center rounded-lg border border-sw-main-darker bg-white h-fit px-4 cursor-pointer"
      >
        <img src={deleteIcon} alt="Icono" /> <p className="pl-2">Eliminar</p>
      </div>
      <div
        onClick={handleOpenAddModal}
        className="flex items-center rounded-lg border border-sw-main-darker bg-white h-fit px-4 cursor-pointer"
      >
        <img src={editIcon} alt="Icono" />
        <p className="pl-2">Editar</p>
      </div>
      {modalAttractive && (
        <AttractiveModal onClose={handleCerrarModalAttractive} data={data} fetchData={handleFetchData}/>
      )}
      {modalCategory && (
        <CategoryModal onClose={handleCerrarModalCategory}  data={data} fetchData={handleFetchData}/> 
      )}
      {modalUser && <UserModal onClose={handleCerrarModalUser} data={data} fetchData={handleFetchData}/>}
      {modalAuthor && (
        <AuthorModal onClose={handleCerrarModalAuthor} data={data} fetchData={handleFetchData}/>
      )}
      {modalTecnique && (
        <TecniqueModal onClose={handleCerrarModalTecnique} data={data} fetchData={handleFetchData}/>
      )}
      {modalMaterial && (
        <MaterialModal onClose={handleCerrarModalMaterial} data={data} fetchData={handleFetchData}/>
      )}
      {modalStyle && (
        <StyleModal onClose={handleCerrarModalStyle} data={data} fetchData={handleFetchData}/>
      )}
      {modalDelete && (
        <DeleteModal
          isOpen={modalDelete}
          onClose={() => setModalDeleteVisible(false)}
          onDelete={handleDelete}
          fetchData={handleFetchData}
        />
      )}
    </div>
  );
}
