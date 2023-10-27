import React from "react";
import CardButtons from "../buttons/ButtonCard";

export default function CardAttractive({ data }) {
  return (
    <div className="flex rounded-xl border border-sw-main-darker bg-white px-7 py-5 mb-5">
      <div className="grow">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-zinc-800">
            Jardín de la inclusión
          </h3>
          <p className="text-neutral-500">
            Este jardín está inspirado en un valor importante para la comunidad
            lasallista, la Inclusión. Desde su diseño muestra como todos son
            parte de la comunidad, todos ocupan un lugar especial y cada uno
            tiene la oportunidad...
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-24">
            <div>
              <p className="text-slate-400 text-sm">Autor</p>
              <p className="text-neutral-500">Julio Hernández Figueroa</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Técnica</p>
              <p className="text-neutral-500">Jardín botánico</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Material</p>
              <p className="text-neutral-500">Pasto, Árboles</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Tamaño</p>
              <p className="text-neutral-500">120 m2</p>
            </div>
          </div>
          <CardButtons />
        </div>
      </div>
    </div>
  );
}
