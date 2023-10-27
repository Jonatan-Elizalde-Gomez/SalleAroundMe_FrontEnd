import React from "react";
import CardButtons from "./card_buttons";

export default function CardAuthor({ data }) {
  return (
    <div className="flex rounded-xl border border-zinc-200 bg-white px-7 py-5">
      <div className="grow">
        <div className="mb-4 flex">
          <div className="flex items-center">
            {" "}
            {/* Agregada la clase "flex items-center" */}
            <p>Imagen</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-800">
              Nombre del autor
            </h3>
            <p className="text-neutral-500">
              Este jardín está inspirado en un valor importante para la
              comunidad lasallista, la Inclusión. Desde su diseño muestra como
              todos son parte de la comunidad, todos ocupan un lugar especial y
              cada uno tiene la oportunidad...
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-24">
            <div>
              <p className="text-slate-400 text-sm">Fecha de nacimiento</p>
              <p className="text-neutral-500">26 de Octubre de 2001</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Fallecimiento</p>
              <p className="text-neutral-500">26 de Octubre de 2001</p>
            </div>
          </div>
          <CardButtons />
        </div>
      </div>
    </div>
  );
}
