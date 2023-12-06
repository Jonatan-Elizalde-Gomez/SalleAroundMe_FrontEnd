import { useState } from "react";
import ReturnIcon from "../../../assets/return-icon.svg";
import CopyIcon from "../../../assets/copy_icon.svg";
import Carousel from "nuka-carousel";
import SwipIcon from "../../../assets/chevron_icon.svg";
import BigCarousel from "./BigCarousel";
import useMapAllAttractions from "../../../hooks/useMapAllAttractions";
import useMapAttractionsByCategory from "../../../hooks/useMapAttractionsByCategory";
import useMapCategoryButtons from "../../../hooks/useMapCategoryButtons";
import useMapAttraction from "../../../hooks/useMapAttraction";

function AttractionDetail({ attraction }) {
  const {
    category_name,
    name,
    description,
    author_name,
    material_name,
    tecnique_name,
    size,
    style_name,
    img,
    lat,
    lng,
  } = attraction;
  const [copiedCoordinates, setCopiedCoordinates] = useState(false);
  const [openBigCarrousel, setOpenBigCarrousel] = useState(false);

  const { handleShowAllAttractions } = useMapAllAttractions();
  const { handleResetAllAttractionsByCategory } = useMapAttractionsByCategory();
  const { handleDeactivateCategoryButton } = useMapCategoryButtons();
  const { handleResetAttraction } = useMapAttraction();

  const handleReturn = () => {
    handleShowAllAttractions();
    handleDeactivateCategoryButton();
    handleResetAllAttractionsByCategory();
    handleResetAttraction();
  };

  const handleCoordinatesLink = () => {
    const tempInput = document.createElement("input");
    tempInput.value = `${lat},${lng}`;
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
          src={img[0]}
          alt="img-cover"
          loading="lazy"
        />
        <button
          onClick={handleReturn}
          className="bg-sw-white absolute -bottom-6 rounded-full left-6 p-3 cursor-pointer hover:bg-slate-100"
        >
          <img src={ReturnIcon} alt="return-icon" />
        </button>
      </div>
      <div className="px-6 pt-8 pb-4 relative">
        <p className="text-xs text-sw-gray">{category_name}</p>
        <h2 className="text-3xl font-medium text-sw-black">{name}</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-4 px-6">
          <div>
            <p className="text-xs text-sw-gray">Descripción</p>
            <p>{description}</p>
          </div>
          <div>
            <p className="text-xs text-sw-gray">Autor</p>
            <p>{author_name}</p>
          </div>
          <div className="flex items-center justify-between relative">
            <div>
              <p className="text-xs text-sw-gray">Coordenadas</p>
              <p>
                {lat},{lng}
              </p>
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
            <p>{tecnique_name ? tecnique_name : "Sin técnica"}</p>
          </div>
          <div>
            <p className="text-xs text-sw-gray">Material</p>
            <p>{material_name ? material_name : "Sin material"}</p>
          </div>
          <div>
            <p className="text-xs text-sw-gray">Tamaño</p>
            <p>{size}</p>
          </div>
          <div>
            <p className="text-xs text-sw-gray">Estilo</p>
            <p>{style_name}</p>
          </div>

          <div>
            <p className="text-xs text-sw-gray py-2">Fotos</p>
            <div className="w-full h-[260px] flex gap-x-4 overflow-hidden">
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
                      loading="lazy"
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
                {img.map((image, index) => (
                  <button key={index} onClick={() => setOpenBigCarrousel(true)}>
                    <img
                      className="rounded-xl h-[250px] w-[600px] object-cover"
                      src={image}
                      alt={`imagen-${name}`}
                      loading="lazy"
                    />
                  </button>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* See Big Images */}
      {openBigCarrousel && (
        <BigCarousel
          name={name}
          images={img}
          setBigCarrousel={setOpenBigCarrousel}
        />
      )}
    </div>
  );
}

export default AttractionDetail;
