import SalleLogo from "../../../../assets/salle_logo.svg"
import SearchIcon from "../../../../assets/search_icon.svg";
import RemoveIcon from "../../../../assets/remove_icon.svg";


function Sidebar() {
  return (
    <div className="w-[30vw] h-screen bg-white shadow-md">
      <div className="p-6 flex items-center gap-x-4">
        <img className="w-10" src={SalleLogo} alt="salle-logo" />
        <div className="flex relative w-full">
          <input
            className="border w-full h-12 outline-none rounded-full pl-6 "
            type="text"
            placeholder="Buscar atracción por nombre..."
          />
          <button className="absolute right-16 top-3">
            <img className="w-6" src={SearchIcon} alt="search" />
          </button>
          <button className="absolute right-5 top-3">
            <img className="w-6" src={RemoveIcon} alt="remove" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar