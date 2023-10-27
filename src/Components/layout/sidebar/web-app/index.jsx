import SalleLogo from "../../../../assets/salle_logo.svg";
import searchIcon from "../../../../assets/search_icon.svg";
import removeIcon from "../../../../assets/remove_icon.svg";
import Dropdown from "./Dropdown";
import { AllAttractions } from "../../../../mocks/AllAttractions";
import AttractionDetail from "./AttractionDetail";
import { AttractionDetailMock } from "../../../../mocks/AttractionDetail";

function Sidebar() {
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
            className="border w-full bg-sw-white h-12 outline-none rounded-full pl-16 "
            type="text"
            placeholder="Buscar atracción por nombre..."
          />
          <button className="absolute right-16 top-3">
            <img className="w-6" src={searchIcon} alt="search" />
          </button>
          <button className="absolute right-5 top-3">
            <img className="w-6" src={removeIcon} alt="remove" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-scroll">
        {/* {AllAttractions.map((attraction) => (
          <Dropdown key={attraction.id} category={attraction.category} attraction={attraction.attractions} />
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
            similar={AttractionDetailMock.similar}
          />
        }
      </div>
    </div>
  );
}

export default Sidebar;
