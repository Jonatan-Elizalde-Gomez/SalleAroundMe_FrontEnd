import Card from "../../../Components/basic/cards/CardWeb";
import ReturnIcon from "../../../Assets/return-icon.svg";
import ShareIcon from "../../../Assets/share_icon.svg";
import CopyIcon from "../../../Assets/copy_icon.svg";
import { useState } from "react";
import Carousel from "nuka-carousel";
import SwipIcon from "../../../Assets/chevron_icon.svg";
import BigCarousel from "./BigCarousel";

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
  similars,
  coordinates,
}) {
  const [copiedAttraction, setCopiedAttraction] = useState(false);
  const [copiedCoordinates, setCopiedCoordinates] = useState(false);
  const [openBigCarrousel, setOpenBigCarrousel] = useState(false);

  const handleDetailLink = () => {
    const currentURL = window.location.href;

    const tempInput = document.createElement("input");
    tempInput.value = currentURL;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    setCopiedAttraction(true);
    setTimeout(() => {
      setCopiedAttraction(false);
    }, 800);
  };

  const handleCoordinatesLink = () => {
    const tempInput = document.createElement("input");
    tempInput.value = coordinates;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    setCopiedCoordinates(true);
    setTimeout(() => {
      setCopiedCoordinates(false);
    }, 800);
  };

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[260px] object-cover"
          src={images[0]}
          alt="img-cover"
        />
        <button className="bg-sw-white absolute -bottom-6 rounded-full left-6 p-3">
          <img src={ReturnIcon} alt="return-icon" />
        </button>
      </div>
      <div className="px-6 pt-8 relative">
        <p className="text-xs text-sw-gray">{category}</p>
        <h2 className="text-3xl font-medium text-sw-black">{name}</h2>
        <button onClick={handleDetailLink}>
          <img
            className="absolute right-10 top-12 w-8"
            src={ShareIcon}
            alt="share-icon"
          />
        </button>
        {copiedAttraction && (
          <p className="bg-sw-white text-xs font-medium shadow-md px-3 py-1 rounded absolute right-12 top-6">
            Copiado
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col gap-y-4 px-6">
          <div>
            <p className="text-xs text-sw-gray">Descripción</p>
            <p>{description}</p>
          </div>
          <div>
            <p className="text-xs text-sw-gray">Autor</p>
            <p>{autor}</p>
          </div>
          <div className="flex items-center justify-between relative">
            <div>
              <p className="text-xs text-sw-gray">Coordenadas</p>
              <p>{coordinates}</p>
            </div>
            <button onClick={handleCoordinatesLink}>
              <img src={CopyIcon} alt="copy-img" />
            </button>
            {copiedCoordinates && (
              <p className="bg-sw-white text-xs font-medium shadow-md px-3 py-1 rounded absolute right-8 top-0">
                Copiado
              </p>
            )}
          </div>
          <div>
            <p className="text-xs text-sw-gray">Técnica</p>
            <p>{tecnique}</p>
          </div>
          <div>
            <p className="text-xs text-sw-gray">Material</p>
            <p>{material}</p>
          </div>
          <div>
            <p className="text-xs text-sw-gray">Tamaño</p>
            <p>{size}</p>
          </div>
          <div>
            <p className="text-xs text-sw-gray">Estilo</p>
            <p>{style}</p>
          </div>
          <div>
            <p className="text-xs text-sw-gray">Ubicación</p>
            <p>
              {address}. {city}, {country}.
            </p>
          </div>

          <div>
            <p className="text-xs text-sw-gray py-2">Fotos</p>
            <div className="w-full h-[250px] flex gap-x-4">
              <Carousel
                wrapAround={true}
                slidesToShow={1.1}
                adaptiveHeight={true}
                cellSpacing={16}
                renderCenterLeftControls={({ previousSlide }) => (
                  <button
                    className="bg-sw-white rounded-full p-2 border ml-3"
                    onClick={previousSlide}
                  >
                    <img
                      className="rotate-90 w-4 "
                      src={SwipIcon}
                      alt="before-icon"
                    />
                  </button>
                )}
                renderBottomCenterControls={false}
                renderCenterRightControls={({ nextSlide }) => (
                  <button
                    className="bg-sw-white rounded-full p-2 border mr-3"
                    onClick={nextSlide}
                  >
                    <img
                      className="-rotate-90 w-4"
                      src={SwipIcon}
                      alt="before-icon"
                    />
                  </button>
                )}
              >
                {images.map((image) => (
                  <button onClick={() => setOpenBigCarrousel(true)}>
                    <img
                      key={image.image}
                      className="rounded-xl h-[250px] object-cover"
                      src={image}
                      alt="all-images"
                    />
                  </button>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <p className="px-6 pt-6 pb-2 w-full border-b text-xl text-sw-gray font-medium">
          Similares
        </p>
        {similars.map((similar) => (
          <Card
            id={similar.id}
            category={category}
            description={similar.description}
            name={similar.name}
            img={similar.img}
            key={similar.id}
          />
        ))}
      </div>

      {/* See Big Images */}
      {openBigCarrousel && (
        <BigCarousel images={images} setBigCarrousel={setOpenBigCarrousel} />
      )}
    </div>
  );
}

export default AttractionDetail;
