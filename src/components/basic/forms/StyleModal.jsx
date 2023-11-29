import React, { useState } from "react";
import iconX from "../../../assets/times2.png";
import { useNavigate } from "react-router-dom";
import { registerStyleService, updateStyleService } from "../../utils/Services";

function StyleModal({ onClose, data, fetchData }) {
  const [name, setName] = useState(data?.name ?? "");

  function validarCampos(objeto) {
    for (const clave in objeto) {
      if (objeto[clave] === null || objeto[clave] === '' || objeto[clave] === undefined) {
        return false; // Retorna falso si algún campo está vacío
      }
    }
    return true; // Retorna verdadero si todos los campos están llenos
  }

  const handleRecord = async () => {
    // Aquí puedes hacer lo que necesites con la información del formulario
    const dataJson = {
      name: name,
    };
    if (data) {
      if (validarCampos(dataJson)) {
      // Aquí puedes realizar lógica específica para la edición
      onClose()
      await updateStyleService(dataJson, data.id);
      fetchData()
      }
      else {
        window.alert("No se puede crear un registro con campos vacíos");
      }
    } else {
      if (validarCampos(dataJson)) {
      // Lógica para la creación
      onClose()
      await registerStyleService(dataJson);
      fetchData()
      }
      else {
        window.alert("No se puede crear un registro con campos vacíos");
      }
    }
  };

  return (
    <div>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-[60]"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center z-[70]">
        <div className="bg-white p-8 rounded shadow-md w-[575px] max-h-[600px] overflow-y-auto">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">
              {data ? "Editar estilo" : "Crear un estilo"}
            </h2>
            <img
              src={iconX}
              className="w-6 h-6 cursor-pointer"
              alt="x"
              onClick={onClose}
            />
          </div>
          <p className="text-base text-gray-500 mb-6">
            {data
              ? "Completa el siguiente formulario para editar el registro"
              : "Completa el siguiente formulario para añadir un nuevo registro"}
          </p>
          {/* Content */}

          {/* Nombre */}
          <label className="block text-zinc-800 text-xs mb-1">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full mb-4 p-2 border border-gray-300 placeholder-stone-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Botones */}
          <div className="flex justify-end mt-5">
            <button
              className="text-neutral-500 w-52 h-9 border rounded-lg border-solid border-neutral-500 flex justify-center items-center px-4 py-2 mr-2 hover:bg-gray-100"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="bg-blue-500 text-white w-52 h-9 px-4 py-2 flex justify-center items-center rounded-lg hover:bg-blue-600"
              onClick={handleRecord}
            >
              {data ? "Editar" : "Crear"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StyleModal;
