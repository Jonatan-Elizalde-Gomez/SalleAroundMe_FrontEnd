import React, { useState } from 'react';
import iconX from "../../../assets/times2.png";
import {registerAuthorService} from "../../utils/Services";

function AuthorModal({ onClose }) {
  const [name, setName] = useState('');
  const [fatherLastname, setFatherLastname] = useState('');
  const [motherLastname, setMotherLastname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [death, setDeath] = useState('');

  const createAuthorService = () => {
    // Aquí puedes hacer lo que necesites con la información del formulario
    const formattedBirthday = new Date(birthday).toUTCString();
    const formattedDeath = death ? new Date(death).toUTCString() : '';
  
    const dataJson = {
      "name": name,
      "father_lastname": fatherLastname,
      "mother_lastname": motherLastname,
      "birthday": formattedBirthday,
      "death": formattedDeath
    }
    registerAuthorService( dataJson);
  
  };

  return (
    <div>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-[60]" onClick={onClose}></div>
      
      {/* Modal content */}
      <div className="fixed inset-0 flex items-center justify-center z-[70]">
        <div className="bg-white p-8 rounded shadow-md w-[575px] max-h-[600px] overflow-y-auto">
          <div className='flex justify-between'>
            <h2 className="text-xl font-semibold">Agregar autor</h2>
            <img src={iconX} className="w-6 h-6 cursor-pointer" alt="cerrar" onClick={onClose}/>
          </div>
          <p className="text-base text-gray-500 mb-6">Completa el siguiente formulario para añadir un nuevo autor</p>
          
          {/* Formulario */}
          <div className="space-y-4">
            {/* Nombre */}
            <div>
              <label className="block text-zinc-800 text-xs mb-1">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Nombre del autor"
                className="w-full p-2 border border-gray-300 placeholder-stone-300 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Apellido Paterno */}
            <div>
              <label className="block text-zinc-800 text-xs mb-1">
                Apellido Paterno
              </label>
              <input
                type="text"
                placeholder="Apellido paterno"
                className="w-full p-2 border border-gray-300 placeholder-stone-300 rounded"
                value={fatherLastname}
                onChange={(e) => setFatherLastname(e.target.value)}
              />
            </div>

            {/* Apellido Materno */}
            <div>
              <label className="block text-zinc-800 text-xs mb-1">
                Apellido Materno
              </label>
              <input
                type="text"
                placeholder="Apellido materno"
                className="w-full p-2 border border-gray-300 placeholder-stone-300 rounded"
                value={motherLastname}
                onChange={(e) => setMotherLastname(e.target.value)}
              />
            </div>

            {/* Fecha de Nacimiento */}
            <div>
              <label className="block text-zinc-800 text-xs mb-1">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 placeholder-stone-300 rounded"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>

            {/* Fecha de Defunción */}
            <div>
              <label className="block text-zinc-800 text-xs mb-1">
                Fecha de Defunción
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 placeholder-stone-300 rounded"
                value={death}
                onChange={(e) => setDeath(e.target.value)}
              />
            </div>
          </div>
          
          {/* Botones */}
          <div className="flex justify-end mt-6">
            <button
              className="text-neutral-500 w-52 h-9 border rounded-lg border-solid border-neutral-500 flex justify-center items-center px-4 py-2 mr-2 hover:bg-gray-100"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="bg-blue-500 text-white w-52 h-9 px-4 py-2 flex justify-center items-center rounded-lg hover:bg-blue-600"
              onClick={createAuthorService}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
      </div>
      );
}

export default AuthorModal;