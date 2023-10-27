import React from "react";

function AttractionDetail({
  id,
  category,
  name,
  description,
  autor,
  material,
  tecnique,
  size,
  style,
  country,
  city,
  address,
  images,
  similar
}) {
  return (
    <div>
      <img src={images[0]} alt="img-cover" />
      <p>{category}</p>
      <h2>{name}</h2>

      <div>
        <p>Descripción</p>
        <p>{description}</p>
      </div>
      <div>
        <p>Autor</p>
        <p>{autor}</p>
      </div>
      <div>
        <p>Coordenadas</p>
        <p>{autor}</p>
      </div>
      <div>
        <p>Técnica</p>
        <p>{autor}</p>
      </div>
      <div>
        <p>Tamaño</p>
        <p>{autor}</p>
      </div>
      <div>
        <p>Estilo</p>
        <p>{autor}</p>
      </div>
      <div>
        <p>Fotos</p>
        {
            images.map((image) => (
                <img src={image} alt="all-images" />
            ))
        }
      </div>
    </div>
  );
}

export default AttractionDetail;
