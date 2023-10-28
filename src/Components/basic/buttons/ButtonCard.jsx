import React from "react";
import deleteIcon from "../../../assets/delete_icon.svg";
import editIcon from "../../../assets/edit_icon.svg";

export default function CardButtons({ data }) {
  return (
    <div className="inline-flex gap-3 text-neutral-500 font-medium items-end">
      <div className="flex items-center rounded-lg border border-sw-main-darker bg-white h-fit px-4">
        <img src={deleteIcon} alt="Icono" /> <p className="pl-2">Eliminar</p>
      </div>
      <div className="flex items-center rounded-lg border border-sw-main-darker bg-white h-fit px-4">
        <img src={editIcon} alt="Icono" />
        <p className="pl-2">Editar</p>
      </div>
    </div>
  );
}
