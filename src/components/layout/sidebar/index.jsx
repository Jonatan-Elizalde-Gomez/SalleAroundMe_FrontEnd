import SalleLogo from "../../../assets/salle_logo.svg";
import RemoveIcon from "../../../assets/remove_icon.svg";
import Dropdown from "../../basic/dropdown/Dropdown";
import { AllAttractions } from "../../../mocks/AllAttractions";
import AttractionDetail from "./AttractionDetail";
import { AttractionDetailMock } from "../../../mocks/AttractionDetail";
import { useState } from "react";

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchItems, setOpenSearchItems] = useState(false);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setOpenSearchItems(true);
    // Filtrar las atracciones que coinciden con el valor de búsqueda
    const filteredResults = AllAttractions.reduce((acc, category) => {
      const filteredAttractions = category.attractions.filter((attraction) =>
        attraction.name.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredAttractions.length > 0) {
        acc.push(filteredAttractions);
      }
      return acc;
    }, []);

    setSearchResults(filteredResults);
    console.log(searchResults);
  };

  const handleCloseSearchItems = () => {
    setOpenSearchItems(false);
  };
  return (
    <div className="w-[30vw] h-screen bg-white shadow-md flex flex-col z-10">
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
            onChange={handleSearchChange}
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
      </div>

      <div className="flex-1 overflow-y-scroll">
        {/* {AllAttractions.map((attraction) => (
          <Dropdown
            key={attraction.id}
            category={attraction.category}
            attraction={attraction.attractions}
          />
        ))} */}
        {
          <AttractionDetail
            id={AttractionDetailMock.id}
            category={AttractionDetailMock.category}
            name={AttractionDetailMock.name}
            description={AttractionDetailMock.description}
            autor={AttractionDetailMock.autor}
            tecnique={AttractionDetailMock.tecnique}
            material={AttractionDetailMock.material}
            size={AttractionDetailMock.size}
            style={AttractionDetailMock.style}
            country={AttractionDetailMock.country}
            city={AttractionDetailMock.city}
            address={AttractionDetailMock.address}
            images={AttractionDetailMock.images}
            similars={AttractionDetailMock.similars}
            coordinates={AttractionDetailMock.coordinates}
          />
        }
      </div>
    </div>
  );
}

export default Sidebar;
