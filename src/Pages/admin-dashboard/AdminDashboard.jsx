// src/App.js
import React from 'react';
import PageLayout from './PageLayout';
import Card from './Card';

function AdminDashboard() {
  const cardData = Array.from({ length: 10 }, (_, i) => ({
    title: `Tarjeta ${i + 1}`,
    content: `Contenido de la tarjeta ${i + 1}...`,
  }));

  return (
    <PageLayout>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
        />
      ))}
    </PageLayout>
  );
}

export default AdminDashboard;
