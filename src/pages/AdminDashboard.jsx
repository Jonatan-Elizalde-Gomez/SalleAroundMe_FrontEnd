// src/App.js
import React, { useState, useEffect } from "react";
import PageLayout from "../components/layout/admin-dashboard/index";
import CardAttractive from "../components/basic/cards/CardAttractive";
import CardUsers from "../components/basic/cards/CardUsers";
import CardCategory from "../components/basic/cards/CardCategory";
import CardMaterial from "../components/basic/cards/CardMaterial";
import CardStyle from "../components/basic/cards/CardStyle";
import CardTecnique from "../components/basic/cards/CardTecnique";

import { attractive } from "../mocks/Attractive";
import {
  getAllAtractions,
  getAllUsers,
  getAllCategories,
  getAllAuthors,
  getAllMaterials,
  getAllTecniques,
  getAllStyles
} from "../components/utils/Services";
import CardAuthor from "../components/basic/cards/CardAuthor";

function AdminDashboard() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAtractive, setIsAtractive] = useState(false);
  const [atraction, setAtraction] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [users, setUsers] = useState(null);
  const [isCategories, setIsCategories] = useState(false);
  const [categories, setCategories] = useState(null);
  const [isAuthor, setIsAuthor] = useState(false);
  const [authors, setAuthors] = useState(null);
  const [isMaterial, setIsMaterial] = useState(false);
  const [materials, setMaterials] = useState(null);
  const [isTecnique, setIsTecnique] = useState(false);
  const [tecniques, setTecniques] = useState(null);
  const [isStyles, setIsStyles] = useState(false);
  const [styles, setStyles] = useState(null);
  const [loading, setLoading] = useState(true);

  function clear() {
    setIsAtractive(false);
    setAtraction(null);
    setIsUser(false);
    setUsers(null);
    setIsCategories(false);
    setCategories(null);
    setIsAuthor(false);
    setAuthors(null);
    setIsMaterial(false)
    setMaterials(null)
    setIsTecnique(false)
    setTecniques(null)
    setIsStyles(false)
    setStyles(null)
  }

  const fetchData = async () => {
    setLoading(true);
    try {
    if (Array.isArray(selectedCard)) {
      const idCategory = selectedCard[0].id; // idCategory será 1

        clear();
        getAllAtractions(setAtraction, idCategory);
        setIsAtractive(true);
    }
    if (selectedCard === "Usuarios") {
        clear();
        getAllUsers(setUsers);
        setIsUser(true);
      }
    

    if (selectedCard === "Categorias") {
        clear();
        getAllCategories(setCategories);
        setIsCategories(true);
      }
    

    if (selectedCard === "Autores") {
        clear();
        getAllAuthors(setAuthors);
        setIsAuthor(true);
      }
    

    
    if (selectedCard === "Tecnicas") {
        clear();
        getAllTecniques(setTecniques);
        setIsTecnique(true);
      }
    

    if (selectedCard === "Materiales") {
        clear();
        getAllMaterials(setMaterials);
        setIsMaterial(true);
      }
    

    if (selectedCard === "Estilos") {
        clear();
        getAllStyles(setStyles);
        setIsStyles(true);
      }
    }
  catch (error){
    console.error("error al obtener los datos")
  }
  finally {
    setLoading(false); // Desactivar vista de carga
  }
  }
  

  useEffect(() => {
    fetchData();
  }, [selectedCard]);

  const handleSelect = (test) => {    
    setSelectedCard(test);
  };

  return (
    <>
        {loading ? (
      <p>Cargando...</p> // Vista de carga
    ) : (
    <PageLayout handleSelect={handleSelect} fetchData={fetchData}>
    {isAtractive &&
      atraction &&
      atraction.map((atrac, index) => (
        <CardAttractive key={index} data={atrac} selectedCard={selectedCard} fetchData={fetchData}/>
      ))}
    {isUser &&
      users &&
      users.map((user, index) => <CardUsers key={index} data={user} selectedCard={selectedCard} fetchData={fetchData}/>)}
    {isCategories &&
      categories &&
      categories.map((category, index) => (
        <CardCategory key={index} data={category} selectedCard={selectedCard} fetchData={fetchData}/>
      ))}
    {isAuthor &&
      authors &&
      authors.map((author, index) => (
        <CardAuthor key={index} data={author} selectedCard={selectedCard} fetchData={fetchData}/>
      ))}
    {isTecnique &&
      tecniques &&
      tecniques.map((tecnique, index) => (
        <CardTecnique key={index} data={tecnique} selectedCard={selectedCard} fetchData={fetchData}/>
      ))}
    {isMaterial &&
      materials &&
      materials.map((material, index) => (
        <CardMaterial key={index} data={material} selectedCard={selectedCard} fetchData={fetchData}/>
      ))}
    {isStyles &&
      styles &&
      styles.map((style, index) => (
        <CardStyle key={index} data={style} selectedCard={selectedCard} fetchData={fetchData}/>
      ))}
  </PageLayout>
  )}
  </>
  );
}

export default AdminDashboard;
