// src/App.js
import React, { useState, useEffect } from "react";
import PageLayout from "../components/layout/admin-dashboard/index";
import CardAttractive from "../components/basic/cards/CardAttractive";
import CardUsers from "../components/basic/cards/CardUsers";
import CardCategory from "../components/basic/cards/CardCategory";

import { attractive } from "../mocks/Attractive";
import {
  getAllAtractions,
  getAllUsers,
  getAllCategories,
  getAllAuthors
} from "../components/utils/Services";
import CardAuthor from "../components/basic/cards/CardAuthor";

function AdminDashboard() {
  const [selectedCard, setSelectedCard] = useState("Usuarios");
  const [isAtractive, setIsAtractive] = useState(false);
  const [atraction, setAtraction] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [users, setUsers] = useState(null);
  const [isCategories, setIsCategories] = useState(false);
  const [categories, setCategories] = useState(null);
  const [isAuthor, setIsAuthor] = useState(false);
  const [authors, setAuthors] = useState(null);


  function getCategory(id) {
    switch (id) {
      case "Jardines":
        return 1;
      case "Extramuros":
        return 2;
      case "Exposiciones":
        return 3;
      case "Esculturas":
        return 4;
      case "Edificios":
        return 5;
      case "Auditorios":
        return 6;
      default:
        return 0; // En caso de que no coincida con ninguna de las opciones
    }
  }

  const attractiveOptions = [
    "Jardines",
    "Extramuros",
    "Exposiciones",
    "Esculturas",
    "Edificios",
    "Auditorios",
  ];
  function clear() {
    setSelectedCard(null);
    setIsAtractive(false);
    setAtraction(null);
    setIsUser(false);
    setUsers(null);
    setIsCategories(false);
    setCategories(null);
    setIsAuthor(false);
    setAuthors(null);
  }

  useEffect(() => {
    const fetchData = async () => {
      if (attractiveOptions.includes(selectedCard)) {
        const idCategory = getCategory(selectedCard); // idCategory será 1

        try {
          clear();
          getAllAtractions(setAtraction, idCategory);
          setIsAtractive(true);
        } catch (error) {
          console.error("Error al obtener las atracciones", error);
        }
      }
      if (selectedCard == "Usuarios") {
        try {
          clear();
          getAllUsers(setUsers);
          setIsUser(true);
        } catch (error) {
          console.error("Error al obtener las atracciones", error);
        }
      }

      if (selectedCard == "Categorias") {
        try {
          clear();
          getAllCategories(setCategories);
          setIsCategories(true);
        } catch (error) {
          console.error("Error al obtener las atracciones", error);
        }
      }

      if (selectedCard == "Autores") {
        try {
          clear();
          getAllAuthors(setAuthors);
          setIsAuthor(true);
        } catch (error) {
          console.error("Error al obtener las atracciones", error);
        }
      }
    };

    fetchData();
  }, [selectedCard]);

  const handleSelect = (test) => {
    setSelectedCard(test);
  };

  return (
    <PageLayout handleSelect={handleSelect}>
      {isAtractive &&
        atraction &&
        atraction.map((atrac, index) => (
          <CardAttractive key={index} data={atrac} />
        ))}
      {isUser &&
        users &&
        users.map((users, index) => <CardUsers key={index} data={users} />)}
      {isCategories &&
        categories &&
        categories.map((categories, index) => (
          <CardCategory key={index} data={categories} />
        ))}

{isAuthor &&
        authors &&
        authors.map((authors, index) => (
          <CardAuthor key={index} data={authors} />
        ))}
    </PageLayout>
  );
}

export default AdminDashboard;
