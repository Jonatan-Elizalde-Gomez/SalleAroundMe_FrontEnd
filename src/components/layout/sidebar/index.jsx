import SalleLogo from "../../../assets/salle_logo.svg";
import RemoveIcon from "../../../assets/remove_icon.svg";
import Dropdown from "../../basic/dropdown/Dropdown";
import ArrowIcon from "../../../assets/return-icon.svg";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../../app/store";
import LoadingGif from "../../../assets/loading.gif";
import useMapAllAttractions from "../../../hooks/useMapAllAttractions";
import { handleSearchChange } from "../../../utils/search";
import AttractionDetail from "../sidebar/AttractionDetail";
import AttractionsByCategory from "./AttractionsByCategory";
import useMapAttraction from "../../../hooks/useMapAttraction";
import useMapCategoryButtons from "../../../hooks/useMapCategoryButtons";

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchItems, setOpenSearchItems] = useState(false);
  const [positionPanel, setPositionPanel] = useState(false);
  const [attractions, setAttractions] = useState(null);

  const { handleGetAllAttractions } = useMapAllAttractions();
  const { handleGetAttractionById } = useMapAttraction();
  const { handleDectivateCategoryButton } = useMapCategoryButtons();

  const { data: attractionsData, loading: attractionsLoading } = useAppSelector(
    (state) => state.attractionsMapReducer
  );

  const {
    data: attractionsByCategoryData,
    loading: attractionsByCategoryLoading,
  } = useAppSelector((state) => state.attractionsByCategoryReducer);

  const { data: attractionDetailData, loading: attractionDetailLoading } =
    useAppSelector((state) => state.attractionMapReducer);

  const { showAll, showSingle, showByCategory } = useAppSelector(
    (state) => state.attractionsToShowReducer
  );

  const handleCloseSearchItems = () => {
    setOpenSearchItems(false);
    setSearchQuery("");
  };

  const handleDetailAttraction = (id) => {
    handleDectivateCategoryButton();
    handleGetAttractionById(id);
    handleCloseSearchItems();
  };

  useEffect(() => {
    if (!attractionsData && !attractionsLoading) {
      handleGetAllAttractions();
    }
  }, [handleGetAllAttractions, attractionsData, attractionsLoading]);

  useEffect(() => {
    if (attractionsData) {
      setAttractions(attractionsData);
    }
  }, [attractionsData]);

  return (
    <div
      className={`w-full absolute transition-all duration-300  ${
        positionPanel ? "bottom-0" : "bottom-[-80%]"
      }  rounded-t-xl lg:bottom-0 lg:rounded-none lg:relative lg:w-[35vw] h-screen bg-white shadow-md flex flex-col z-10`}
    >
      <div className="p-6 flex items-center gap-x-4 bg-white border-b">
        <div className="flex relative w-full">
          <img
            className="w-8 absolute left-6 top-2"
            src={SalleLogo}
            alt="salle-logo"
          />
          <input
            className="border w-full bg-sw-white h-12 outline-none rounded-full pl-16 pr-[22%]"
            type="text"
            placeholder="Buscar atracción por nombre..."
            value={searchQuery}
            onChange={(event) =>
              handleSearchChange(
                event,
                setSearchQuery,
                setOpenSearchItems,
                attractionsData,
                setSearchResults
              )
            }
          />
          <button
            onClick={handleCloseSearchItems}
            className="absolute right-5 top-3"
          >
            <img className="w-6" src={RemoveIcon} alt="remove-icon" />
          </button>
          <div className="bg-sw-white flex flex-col w-full absolute max-h-[250px] z-[6] left-0 top-14 rounded-xl shadow-md overflow-y-auto">
            {openSearchItems &&
              searchResults &&
              searchResults.length > 0 &&
              searchResults.map((category) =>
                category.map((attraction) => (
                  <button
                    onClick={() => handleDetailAttraction(attraction.id)}
                    key={attraction.id}
                    className="py-3 border-b px-3 hover:bg-sw-main-lighter text-left"
                  >
                    <p className="text-sw-black">{attraction.name}</p>
                  </button>
                ))
              )}
          </div>
        </div>
        <button
          onClick={() => setPositionPanel(!positionPanel)}
          className="lg:hidden"
        >
          <img
            className={`transition-all duration-300 ${
              positionPanel ? "-rotate-90" : "rotate-90"
            }`}
            src={ArrowIcon}
            alt="toggle-panel"
          />
        </button>
      </div>

      <div className="flex-1 overflow-y-scroll">
        {attractionsLoading && (
          <div className="flex flex-col justify-center items-center h-full">
            <img className="w-16" src={LoadingGif} alt="loading" />
            <p>Cargando atracciones</p>
          </div>
        )}
        {attractionsByCategoryLoading && (
          <div className="flex flex-col justify-center items-center h-full">
            <img className="w-16" src={LoadingGif} alt="loading" />
            <p>Cargando atracciones por categoría</p>
          </div>
        )}
        {attractionDetailLoading && (
          <div className="flex flex-col justify-center items-center h-full">
            <img className="w-16" src={LoadingGif} alt="loading" />
            <p>Cargando detalle de la atracción</p>
          </div>
        )}
        {/* All Attractions */}
        <div>
          {attractions &&
            showAll &&
            Array.isArray(attractions) &&
            attractions.map((attraction) => (
              <Dropdown
                key={attraction.id}
                category={attraction.name}
                attraction={attraction.attractions}
              />
            ))}
        </div>
        {/* All Attractions By Category */}
        <div>
          {attractionsByCategoryData && showByCategory && (
            <AttractionsByCategory attractions={attractionsByCategoryData} />
          )}
        </div>
        {/* Attraction Detail */}
        <div>
          {attractionDetailData && showSingle && (
            <AttractionDetail attraction={attractionDetailData} />
          )}
        </div>
        <button
          onClick={() => window.open("/collaborators", "_blank")}
          className="text-left flex items-center w-full px-8 gap-x-2 py-5 hover:bg-sw-main-lighter"
        >
          <img className="w-10" src={SalleLogo} alt="logo-salle" />
          <div>
            <h3 className="font-medium text-sw-black">
              Colaboradores del proyecto
            </h3>
            <p className="text-sw-gray text-xs">
              Ingeniería en Desarrollo de Software y Sistemas Computacionales
              2020 - 2024
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
