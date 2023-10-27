import { useState } from "react";
import OpenIcon from "../../../assets/chevron_icon.svg";
import Card from "./Card";

function Dropdown({ category, attraction }) {
  const [openAccordion, setOpenAccordion] = useState(true);

  const handleAccordion = () => {
    setOpenAccordion(!openAccordion);
  };
  return (
    <div className="">
      <button
        onClick={handleAccordion}
        className="bg-sw-white px-6 py-5 relative border-b w-full text-left outline-none"
      >
        <h3 className="text-sw-black font-medium text-xl"> {category} </h3>
        <div className="absolute right-8 top-6">
          <img
            className={`w-6 transition-all duration-300 ${
              openAccordion ? "rotate-180" : ""
            }`}
            src={OpenIcon}
            alt="open-icon"
          />
        </div>
      </button>

      {openAccordion && (
        <div className="transition-opacity duration-1000 ease-in-out transform">
          {attraction.map((attractionItem) => (
            <Card
              key={attractionItem.id}
              id={attractionItem.id}
              category={category}
              name={attractionItem.name}
              descrition={attractionItem.description}
              img={attractionItem.img}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
