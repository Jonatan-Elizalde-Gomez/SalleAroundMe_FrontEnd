import React, { useState, useEffect } from "react";
import LaSalle from "../assets/salleLogoCompleto.png";
import CollaboratorDropdown from "../components/basic/dropdown/CollaboratorDropdown";
import { usersData } from "../mocks/usersData";
import UserImage from "../assets/poncho.jpg";

function Collaborators() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.altKey && event.key === "p") {
        setShowDiv(!showDiv);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [showDiv]);

  return (
    <div className="bg-[#f5faff] relative">
      <div className="w-full py-8 flex justify-center items-center border">
        <img src={LaSalle} alt="La-Salle-Logo-PNG" />
      </div>
      <div className="py-4">
        {usersData.map((data) => (
          <CollaboratorDropdown
            title={data.area}
            collaborators={data.collaborators}
          />
        ))}
      </div>
      {showDiv && (
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)]">
          <img className="w-[500px]" src={UserImage} alt="fonsi" />
          <h2 className="font-medium text-white">We love you fonsi ♥️</h2>
        </div>
      )}
    </div>
  );
}

export default Collaborators;
