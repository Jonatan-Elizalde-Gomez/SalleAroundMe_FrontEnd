import React from "react";
import CardButtons from "../buttons/ButtonCard";

export default function CardAttractive({ data, selectedCard, fetchData }) {
  const handlefetchData = () =>{fetchData()}
  return (
    <div className="flex rounded-xl border border-zinc-200 bg-white px-7 py-5 mb-4">
      <div className="grow">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-zinc-800">
            {data.name}
          </h3>
          <p className="text-neutral-500">
          {data.description}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="hidden lg:flex gap-24">
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
          <CardButtons data={data} selectedCard={selectedCard} fetchData={handlefetchData}/>
        </div>
      </div>
    </div>
  );
}
