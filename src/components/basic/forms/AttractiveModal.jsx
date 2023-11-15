import React, { useState } from 'react';
import iconX from "../../../assets/times2.png";
import upload from "../../../assets/upload.png";
import { useNavigate } from "react-router-dom";

function AttractiveModal({ onClose }) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [description, setDescription] = useState('');
  const [technique, setTechnique] = useState('');
  const [materials, setMaterials] = useState('');
  const [size, setSize] = useState('');
  const [style, setStyle] = useState('');

  const [archivo, setArchivo] = useState(null);
  const [archivoValid, setArchivoValid] = useState(true);

  const handleCreateRecord = () => {
    // Aquí puedes hacer lo que necesites con la información del formulario
    const dataJson = {	
      "name": name,
      "author": author,
      "latitude": latitude,
      "longitude": longitude,
      "description": description,
      "technique": technique,
      "materials": materials,
      "size": size,
      "style": style,
      "file": archivo,
    }
    console.log(dataJson);
  };

   // Función para manejar la carga de un archivo
   const handleFileUpload = (file) => {
    setArchivo(file);
    setArchivoValid(true);
    console.log(file)
  };

  const handleLatitudeChange = (e) => {
    const { value } = e.target;
    const regex = /^[0-9.-]*$/;
    if (regex.test(value) || value === '') {
      setLatitude(value);
    }
  };
  
  const handleLongitudeChange = (e) => {
    const { value } = e.target;
    const regex = /^[0-9.-]*$/;
    if (regex.test(value) || value === '') {
      setLongitude(value);
    }
  };

  return (

    <div>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-[575px] max-h-[600px] overflow-y-auto">
          <div className='flex justify-between'>
            <h2 className="text-xl font-semibold">Crear Registro</h2>
            <img src={iconX} className="w-6 h-6 cursor-pointer" alt="x" onClick={onClose}/>
          </div>
          <p className="text-base text-gray-500 mb-6">Completa el siguiente formulario para añadir un nuevo registro</p>
          {/* Content */}

          {/* Nombre */}
          <label className="block text-zinc-800 text-xs mb-1">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full mb-4 p-2 border border-gray-300 placeholder-stone-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Autor */}
          <label className="block text-zinc-800 text-xs mb-1">
          Autor
          </label>
          <select
            className="w-full mb-4 p-2 placeholder-stone-300 border border-gray-300 rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            {/* Opciones del ComboBox */}
            <option value="">Selecciona un autor</option>
            <option value="autor1">Autor 1</option>
            <option value="autor2">Autor 2</option>
          </select>

          <div className='flex justify-between'>
            <div>
              {/* Latitud */}
              <label className="block text-zinc-800 text-xs mb-1">
              Latitud
              </label>
              <input
                type="text"
                placeholder="Latitud"
                className="w-full mb-4 p-2 placeholder-stone-300 border border-gray-300 rounded"
                value={latitude}
                onChange={handleLatitudeChange}
              />
            </div>

            <div>
              {/* Longitud */}
              <label className="block text-zinc-800 text-xs mb-1">
              Longitud
              </label>
              <input
                type="text"
                placeholder="Longitud"
                className="w-full mb-4 p-2 placeholder-stone-300 border border-gray-300 rounded"
                value={longitude}
                onChange={handleLongitudeChange}
              />
            </div>
          </div>

          {/* Descripcion */}
          <label className="block text-zinc-800 text-xs mb-1">
          Descripcion
          </label>
          <textarea
            placeholder="Descripcion"
            className="w-full mb-4 p-2 placeholder-stone-300 border border-gray-300 rounded"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          {/* Tecnica */}
          <label className="block text-zinc-800 text-xs mb-1">
          Tecnica
          </label>
          <select
            className="w-full mb-4 p-2 placeholder-stone-300 border border-gray-300 rounded"
            value={technique}
            onChange={(e) => setTechnique(e.target.value)}
          >
            {/* Opciones del ComboBox */}
            <option value="">Selecciona una técnica</option>
            <option value="tecnica1">Técnica 1</option>
            <option value="tecnica2">Técnica 2</option>
          </select>

          {/* Materiales */}
          <label className="block text-zinc-800 text-xs mb-1">
          Materiales
          </label>
          <select
            className="w-full mb-4 p-2 placeholder-stone-300 border border-gray-300 rounded"
            value={materials}
            onChange={(e) => setMaterials(e.target.value)}
          >
            {/* Opciones del ComboBox */}
            <option value="">Selecciona materiales</option>
            <option value="material1">Material 1</option>
            <option value="material2">Material 2</option>
          </select>

          {/* Tamaño */}
          <label className="block text-zinc-800 text-xs mb-1">
          Tamaño
          </label>
          <input
            type="text"
            placeholder="Tamaño"
            className="w-full mb-4 p-2 border placeholder-stone-300 border-gray-300 rounded"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />

          {/* Estilo */}
          <label className="block text-zinc-800 text-xs mb-1">
          Estilo
          </label>
          <select
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            {/* Opciones del ComboBox */}
            <option value="">Selecciona un estilo</option>
            <option value="estilo1">Estilo 1</option>
            <option value="estilo2">Estilo 2</option>
          </select>

          {/* Dropzone */}
          <div>
            <div
              className={`bg-white border-dashed border-2 rounded-md p-4 mt-2 h-[150px] lg:h-[270px] text-center flex flex-col justify-center items-center cursor-pointer ${
                archivoValid ? "border-gray-300" : "border-red-500"  
              }`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                // Realizar el manejo del archivo seleccionado (por ejemplo, guardar en el estado)
                handleFileUpload(file);
              }}
              // En el evento de hacer clic para seleccionar un archivo
              onClick={() => {
                const fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.accept = ".jpg, .jpeg, .png";
                fileInput.style.display = "none";
                document.body.appendChild(fileInput);

                fileInput.addEventListener("change", (e) => {
                  const file = e.target.files[0];
                  // Realizar el manejo del archivo seleccionado (por ejemplo, guardar en el estado)
                  handleFileUpload(file);
                  document.body.removeChild(fileInput);
                });

                fileInput.click();
              }}
            >
              <img src={upload} alt="Cargando..." className="mx-auto mb-4 w-6 h-6" />
              <p className="text-neutral-500 text-xs">Arrastra y suelta aquí las imágenes, o haz clic para seleccionarlas</p>
            </div>
          </div>
  
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
              onClick={handleCreateRecord}
            >
              Crear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttractiveModal;