// src/App.js
import React from "react";
import PageLayout from "./admin-dashboard/PageLayout";
import CardAttractive from "../Components/Cards/card_attractive";
import { attractive } from "../Mocks/Attractive";

function AdminDashboard() {
  const cardData = Array.from({ length: 10 }, (_, i) => ({
    title: `Tarjeta ${i + 1}`,
    content: `Contenido de la tarjeta ${i + 1}...`,
  }));

  return (
    <PageLayout>
      {cardData.map((card, index) => (
        <CardAttractive key={index} data={attractive} />
      ))}
    </PageLayout>
  );
}

export default AdminDashboard;
