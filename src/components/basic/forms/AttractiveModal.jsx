import React, { useState, useEffect } from "react";
import iconX from "../../../assets/times2.png";
import upload from "../../../assets/upload.png";
import { useNavigate } from "react-router-dom";
import {
  createAttractionService,
  updateAttractionService,
} from "../../utils/Services";
import {
  getAllAuthors,
  getAllTecniques,
  getAllCategories,
  getAllMaterials,
  getAllStyles,
} from "../../utils/Services";

function AttractiveModal({ onClose, data, fetchData }) {
  const [name, setName] = useState(data?.name ?? "");
  const [author, setAuthor] = useState(data?.author?.id ?? "");
  const [latitude, setLatitude] = useState(data?.lat ?? "");
  const [longitude, setLongitude] = useState(data?.lng ?? "");
  const [description, setDescription] = useState(data?.description ?? "");
  const [technique, setTechnique] = useState("");
  const [material, setMaterial] = useState("");
  const [category, setCategory] = useState(data?.category.id ?? "");
  const [size, setSize] = useState(data?.size ?? "");
  const [style, setStyle] = useState(data?.style.id ?? "");
  const [imageURL, setImageURL] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState(
    data?.materials ?? []
  );
  const [selectedTechniques, setSelectedTechniques] = useState(data?.tecnicas ?? []);
  const [authors, setAuthors] = useState([]);
  const [techniques, setTechniques] = useState([]);
  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [styles, setStyles] = useState([]);
  const [images, setImages] = useState(data?.img ?? []);

  const [archivo, setArchivo] = useState(null);
  const [archivoValid, setArchivoValid] = useState(true);
  useEffect(() => {
    getAllAuthors(setAuthors);
    getAllTecniques(setTechniques);
    getAllCategories(setCategories);
    getAllMaterials(setMaterials);
    getAllStyles(setStyles);

    // Initialize selectedMaterials with data.materials if it exists
    if (data && data.materials) {
      setSelectedMaterials(data.materials.map((material) => material.id));
    }
    if (data && data.tecnicas) {
      setSelectedTechniques(data.tecnicas.map((technique) => technique.id));
    }

  }, []);

  const handleCreateRecord = async () => {
    // Aquí puedes hacer lo que necesites con la información del formulario
    const userId = localStorage.getItem("userId");

    const dataJson = {
      name: name,
      lat: parseFloat(latitude),
      lng: parseFloat(longitude),
      description: description,
      //img: images.map((image) => ({ url: image })),
      img: {url: "https://salle-images-bucket.s3.amazonaws.com/jardin_de_la_inclusion_1.webp"},
      size: Number(size),
      id_author: Number(author),
      id_style: Number(style),
      id_user: Number(userId),
      id_mac_address: 1,
      id_category: Number(category),
      material: selectedMaterials.map((materialId) => ({ id: materialId })),
      tecnica: selectedTechniques.map((techniqueId) => ({ id: techniqueId })),
    };
    if (
      description === "" ||
      name === "" ||
      latitude === "" ||
      longitude === "" ||
      size === "" ||
      style === "" ||
      author === "" ||
      images === "" ||
      selectedMaterials.length === 0 ||
      category === "" ||
      selectedTechniques.length === 0
    ) {
      window.alert("No se puede crear un registro con campos vacíos");
    } else {
      if (data) {
        // Aquí puedes realizar lógica específica para la edición
        onClose()
        await updateAttractionService(dataJson, data.id);
        fetchData()
      } else {
        // Lógica para la creación
        onClose()
        await createAttractionService(dataJson);
        fetchData()
      }
    }
  };

  // Función para agregar una nueva imagen al arreglo
  const handleFileUpload = (file) => {
    const reader = new FileReader();

    reader.onload = () => {
      setImages((prevImages) => [...prevImages, reader.result]);
    };

    reader.readAsDataURL(file);
  };

  // Función para eliminar una imagen del arreglo
  const removeImage = (indexToRemove, event) => {
    event.stopPropagation(); // Esto previene que el evento continúe propagándose
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleLatitudeChange = (e) => {
    const { value } = e.target;
    const regex = /^[0-9.-]*$/;
    if (regex.test(value) || value === "") {
      setLatitude(value);
    }
  };

  const handleLongitudeChange = (e) => {
    const { value } = e.target;
    const regex = /^[0-9.-]*$/;
    if (regex.test(value) || value === "") {
      setLongitude(value);
    }
  };

  const handleMaterialsChange = (e) => {
    const value = e;
    setSelectedMaterials((prevMaterials) => [...prevMaterials, Number(value)]);
  };

  // Función para eliminar una técnica del arreglo
  const removeMaterial = (materialToRemove) => {
    setSelectedMaterials((prevMaterials) =>
      prevMaterials.filter((material) => material !== materialToRemove)
    );
  };

  const handleTechniqueChange = (e) => {
    const value = e;
    setSelectedTechniques((prevTechniques) => [
      ...prevTechniques,
      Number(value),
    ]);
  };

  // Función para eliminar una técnica del arreglo
  const removeTechnique = (techniqueToRemove) => {
    setSelectedTechniques((prevTechniques) =>
      prevTechniques.filter((technique) => technique !== techniqueToRemove)
    );
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
              {data ? "Editar atracción" : "Crear atracción"}
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

          {/* Autor */}
          <label className="block text-zinc-800 text-xs mb-1">Autor</label>
          <select
            className="w-full mb-4 p-2 placeholder-stone-300 border border-gray-300 rounded"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option value="">{"Seleccione un autor"}</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {`${author.name} ${author.father_lastname} ${author.mother_lastname}`}
              </option>
            ))}
          </select>

          <div className="flex justify-between">
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
          <label className="block text-zinc-800 text-xs mb-1">Tecnica</label>
          {/* Chips de técnicas seleccionadas */}
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedTechniques.map((techniqueId, index) => {
              // Encuentra el nombre de la técnica usando el ID
              const technique =
                techniques.find((t) => t.id === techniqueId)?.name || "";
              return (
                <div
                  key={index}
                  className="flex items-center bg-gray-200  rounded px-2 py-1"
                >
                  <span className="text-sm mr-2">{technique}</span>
                  <button
                    onClick={() => removeTechnique(techniqueId)}
                    className="bg-gray-500 text-white rounded-full w-[15px] h-[15px] flex align-center justify-center p-1"
                  >
                    <span className="relative bottom-1 text-[10px]">x</span>
                  </button>

                  <button
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full w-[30px] h-[30px] flex align-center justify-center"
                    onClick={() => removeTechnique(techniqueId)}
                  >
                    <span className="text-center">x</span>
                  </button>
                </div>
              );
            })}
          </div>
          <select
            className="w-full mb-4 p-2 placeholder-stone-300 border border-gray-300 rounded"
            value={technique}
            onChange={(e) => {
              handleTechniqueChange(e.target.value);
            }}
          >
            <option value="">Selecciona una técnica</option>
            {techniques.map((technique) => (
              <option key={technique.id} value={technique.id}>
                {`${technique.name}`}
              </option>
            ))}
          </select>

          {/* Categoria */}
          <label className="block text-zinc-800 text-xs mb-1">Categoría</label>
          <select
            className="w-full mb-4 p-2 placeholder-stone-300 border border-gray-300 rounded"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {`${category.name}`}
              </option>
            ))}
          </select>

          {/* Materiales */}
          <label className="block text-zinc-800 text-xs mb-1">Materiales</label>
          {/* Chips de materiales seleccionados */}
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedMaterials.map((materialId, index) => {
              // Encuentra el nombre de la técnica usando el ID
              const material =
                materials.find((t) => t.id === materialId)?.name || "";
              return (
                <div
                  key={index}
                  className="flex items-center bg-gray-200  rounded px-2 py-1"
                >
                  <span className="text-sm mr-2">{material}</span>
                  <button
                    onClick={() => removeMaterial(materialId)}
                    className="bg-gray-500 text-white rounded-full w-[15px] h-[15px] flex align-center justify-center p-1"
                  >
                    <span className="relative bottom-1 text-[10px]">x</span>
                  </button>

                  <button
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full w-[30px] h-[30px] flex align-center justify-center"
                    onClick={() => removeMaterial(materialId)}
                  >
                    <span className="text-center">x</span>
                  </button>
                </div>
              );
            })}
          </div>
          <select
            className="w-full mb-4 p-2 placeholder-stone-300 border border-gray-300 rounded"
            value={material}
            onChange={(e) => {
              handleMaterialsChange(e.target.value);
            }}
          >
            <option value="">Selecciona un material</option>
            {materials.map((material) => (
              <option key={material.id} value={material.id}>
                {`${material.name}`}
              </option>
            ))}
          </select>
          {/* Tamaño */}
          <label className="block text-zinc-800 text-xs mb-1">Tamaño</label>
          <input
            type="text"
            placeholder="Tamaño"
            className="w-full mb-4 p-2 border placeholder-stone-300 border-gray-300 rounded"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />

          {/* Estilo */}
          <label className="block text-zinc-800 text-xs mb-1">Estilo</label>
          <select
            className="w-full mb-4 p-2 placeholder-stone-300 border border-gray-300 rounded"
            value={style}
            onChange={(e) => {
              setStyle(e.target.value);
            }}
          >
            <option value="">Selecciona un estilo</option>
            {styles.map((style) => (
              <option key={style.id} value={style.id}>
                {`${style.name}`}
              </option>
            ))}
          </select>

          {/* Dropzone */}
          <div>
            <div
              className={`bg-white border-dashed border-2 rounded-md p-4 mt-2 h-auto lg:h-[270px] text-center flex flex-wrap justify-center items-center cursor-pointer ${
                archivoValid ? "border-gray-300" : "border-red-500"
              }`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                Array.from(e.dataTransfer.files).forEach((file) =>
                  handleFileUpload(file)
                );
              }}
              // En el evento de hacer clic para seleccionar un archivo
              onClick={() => {
                const fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.accept = ".jpg, .jpeg, .png";
                fileInput.multiple = true;
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
              {images.length > 0 &&
                images.map((image, index) => (
                  <div key={index} className="relative p-2">
                    <img
                      src={image}
                      alt={`Cargada ${index}`}
                      className="w-24 h-24 object-cover"
                    />
                    <button
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full w-[30px] h-[30px] flex align-center justify-center"
                      onClick={(e) => removeImage(index, e)}
                    >
                      <span className="text-center">x</span>
                    </button>
                  </div>
                ))}
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => {
                  const fileInput = document.createElement("input");
                  fileInput.type = "file";
                  fileInput.accept = ".jpg, .jpeg, .png";
                  fileInput.multiple = true;
                  fileInput.style.display = "none";
                  document.body.appendChild(fileInput);

                  fileInput.addEventListener("change", (e) => {
                    Array.from(e.target.files).forEach((file) =>
                      handleFileUpload(file)
                    );
                    document.body.removeChild(fileInput);
                  });

                  fileInput.click();
                }}
              >
                {images.length < 5 && (
                  <>
                    <img
                      src={upload}
                      alt="Cargar"
                      className="mx-auto mb-4 w-6 h-6"
                    />
                    <p className="text-neutral-500 text-xs">
                      Arrastra y suelta aquí las imágenes, o haz clic para
                      seleccionarlas
                    </p>
                  </>
                )}
              </div>
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
              {data ? "Editar" : "Agregar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttractiveModal;
