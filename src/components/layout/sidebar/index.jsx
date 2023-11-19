import SalleLogo from "../../../assets/salle_logo.svg";
import RemoveIcon from "../../../assets/remove_icon.svg";
import Dropdown from "../../basic/dropdown/Dropdown";
import ArrowIcon from "../../../assets/return-icon.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/store";
import LoadingGif from "../../../assets/loading.gif";
import useMapAllAttractions from "../../../hooks/useMapAllAttractions";
import { handleSearchChange } from "../../../utils/search";
import AttractionDetail from '../sidebar/AttractionDetail'

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchItems, setOpenSearchItems] = useState(false);
  const [positionPanel, setPositionPanel] = useState(false);
  const [attractions, setAttractions] = useState(null);
  const [attraction, setAttraction] = useState(null);
  const [attractionByCategory, setAttractionByCategory] = useState(null);

  const { handleGetAllAttractions } = useMapAllAttractions();

  const navigate = useNavigate();
  const { data: attractionsMapData, loading: attractionsMapLoading } =
    useAppSelector((state) => state.attractionsMapReducer);

  const { data: attractionMapData, loading: attractionMapLoading } =
    useAppSelector((state) => state.attractionMapReducer);

  const {
    data: attractionsByCategoryData,
    loading: attractionsByCategoryLoading,
  } = useAppSelector((state) => state.attractionsByCategoryReducer);

  const handleCloseSearchItems = () => {
    setOpenSearchItems(false);
  };

  useEffect(() => {
    if (!attractionsMapData) {
      handleGetAllAttractions();
    }
  }, [handleGetAllAttractions, attractionsMapData]);

  useEffect(() => {
    if (
      attractionsMapData &&
      !attractionMapData &&
      !attractionsByCategoryData
    ) {
      setAttractions(attractionsMapData);
    } else if (
      attractionMapData &&
      !attractionsMapData &&
      !attractionsByCategoryData
    ) {
      setAttractions(attractionMapData);
    }else if (
      attractionsByCategoryData &&
      !attractionMapData &&
      !attractionsMapData
    ) {
      setAttractions(attractionsByCategoryData);
    }
  }, [attractionMapData, attractionsByCategoryData, attractionsMapData]);

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
                attractionsMapData,
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
        {attractionsMapLoading && (
          <div className="flex flex-col justify-center items-center h-full">
            <img className="w-16" src={LoadingGif} alt="loading" />
            <p>Cargando atracciones</p>
          </div>
        )}
        {attractions &&
          Array.isArray(attractions) &&
          attractions.map((attraction) => (
            <Dropdown
              key={attraction.id}
              category={attraction.name}
              attraction={attraction.attractions}
            />
          ))}
        {attraction && (
          <AttractionDetail
            id={attraction.id}
            category={attraction.category_name}
            name={attraction.name}
            description={attraction.description}
            author={attraction.author_name}
            tecnique={attraction.tecnique_name}
            material={attraction.material_name}
            size={attraction.size}
            style={attraction.style_name}
            images={attraction.img}
            lat={attraction.lat}
            lng={attraction.lng}
          />
        )}
        <button
          onClick={() => navigate("/collaborators")}
          className="text-left flex items-center px-8 gap-x-2 py-5 hover:bg-sw-main-lighter"
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
