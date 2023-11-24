// src/App.js
import React, { useState } from "react";
import PageLayout from "../components/layout/admin-dashboard/index";
import CardAttractive from "../components/basic/cards/CardAttractive";
import { attractive } from "../mocks/Attractive";
import { getAllAtractions } from "../components/utils/Services";
function AdminDashboard() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAtractive, setIsAtractive] = useState(false);
  const attractiveOptions = [
    "Jardines",
    "Extramuros",
    "Exposiciones",
    "Esculturas",
    "Edificios",
    "Auditorios",
  ];

  if (selectedCard) {
    if (attractiveOptions.includes(selectedCard)) {
      setIsAtractive(true);
    }
  }

  const handleSelect = (test) => {
    setSelectedCard(test);
  };

  const cardData = Array.from({ length: 10 }, (_, i) => ({
    title: `Tarjeta ${i + 1}`,
    content: `Contenido de la tarjeta ${i + 1}...`,
  }));

  return (
    <PageLayout handleSelect={handleSelect}>
      {cardData.map((card, index) => (
        <CardAttractive key={index} data={attractive} />
      ))}
    </PageLayout>
  );
}

export default AdminDashboard;
