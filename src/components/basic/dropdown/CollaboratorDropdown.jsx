import React, { useState } from "react";
import DropIcon from "../../../assets/chevron_icon.svg";
import CardCollaborator from "../cards/CardCollaborator";

function CollaboratorDropdown({ title, collaborators }) {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full py-3 px-12 ">
      <button
        onClick={handleOpen}
        className="flex items-center w-full gap-x-2 pb-4 outline-none"
      >
        <h3 className="font-medium text-black text-xl">{title}</h3>
        <img
          src={DropIcon}
          alt="drop-icon"
          className={`w-7 duration-300 transition-all ${
            open ? "" : "rotate-180"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-max-h duration-300 ${
          open ? "max-h-screen" : "max-h-0"
        } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`}
      >
        {collaborators.map((collaborator, index) => (
          <CardCollaborator
            key={index}
            fullname={collaborator.fullname}
            description={collaborator.description}
            image={collaborator.image}
            linkedinLink={collaborator.linkedin}
            emailLink={collaborator.email}
            githubLink={collaborator.github}
          />
        ))}
      </div>
    </div>
  );
}

export default CollaboratorDropdown;
