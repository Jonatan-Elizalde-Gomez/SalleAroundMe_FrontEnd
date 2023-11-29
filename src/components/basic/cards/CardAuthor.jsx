import React from "react";
import CardButtons from "../buttons/ButtonCard";
import { format, parse } from "date-fns";
import { es } from "date-fns/locale";

export default function CardAuthor({ data, selectedCard, fetchData }) {
  const handlefetchData = () =>{fetchData()}

  // Función para formatear la fecha desde un formato específico
  const formatDate = (dateString) => {
    // Verifica que dateString es una cadena no vacía
    if (typeof dateString !== 'string' || dateString.trim() === '') {
      return 'Fecha inválida';
    }

    try {
      // Parsea la fecha desde el formato específico proporcionado
      const parsedDate = parse(dateString, "EEE, dd MMM yyyy HH:mm:ss 'GMT'", new Date());
      // Formatea la fecha al formato deseado en español
      return format(parsedDate, "d 'de' MMMM 'de' yyyy", { locale: es });
    } catch (error) {
      // Maneja los errores de parseo o formato
      console.error('Error al formatear la fecha:', error);
      return 'Fecha inválida';
    }
  };
  

  return (
    <div className="flex rounded-xl border border-zinc-200 bg-white px-7 py-5 mb-4">
      <div className="grow">
        <div className="mb-4 flex">
          <div>
            <h3 className="text-lg font-semibold text-zinc-800">
              {data.name}
            </h3>
            <p className="text-neutral-500">
              {data.father_lastname} {data.mother_lastname} 
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-24">
            <div>
              <p className="text-slate-400 text-sm">Fecha de nacimiento</p>
              <p className="text-neutral-500">{formatDate(data.birthday)}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Fallecimiento</p>
              <p className="text-neutral-500">{data.death ? formatDate(data.death) : 'N/A'}</p>
            </div>
          </div>
          <CardButtons data={data} selectedCard={selectedCard} fetchData={handlefetchData}/>
        </div>
      </div>
    </div>
  );
}
