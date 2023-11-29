import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import AttractiveModal from '../components/basic/forms/AttractiveModal';
import CategoryModal from '../components/basic/forms/CategoryModal';
import UserModal from '../components/basic/forms/UserModal';

function ModalsAdd() {
  const [modalAttractive, setModalAttractiveVisible] = useState(false);
  const [modalCategory, setModalCategoryVisible] = useState(false);
  const [modalUser, setModalUserVisible] = useState(false);

  const handleAbrirModalAttractive = () => {
    setModalAttractiveVisible(true);
  };

  const handleCerrarModalAttractive = () => {
    setModalAttractiveVisible(false);
  };

  const handleAbrirModalCategory = () => {
    setModalCategoryVisible(true);
  };

  const handleCerrarModalCategory = () => {
    setModalCategoryVisible(false);
  };

  const handleAbrirModalUser = () => {
    setModalUserVisible(true);
  };

  const handleCerrarModalUser = () => {
    setModalUserVisible(false);
  };

  return (
    <div>
      <button onClick={handleAbrirModalAttractive}>Abrir Modal</button>
      <button onClick={handleAbrirModalCategory}>Abrir Modal</button>
      <button onClick={handleAbrirModalUser}>Abrir Modal</button>
    
      {modalAttractive && <AttractiveModal onClose={handleCerrarModalAttractive} />}
      {modalCategory && <CategoryModal onClose={handleCerrarModalCategory} />}
      {modalUser && <UserModal onClose={handleCerrarModalUser} />}
    </div>
  );
}

export default ModalsAdd;