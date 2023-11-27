import { useState } from "react";

function DeleteModal({ isOpen, onClose, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      console.log("Iniciando eliminación...");
      await onDelete();
      console.log("Eliminación exitosa.");
    } catch (error) {
      console.error("Error al eliminar:", error);
    } finally {
      setIsDeleting(false);
      onClose();
    }
  };

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 items-center justify-center`}
    >
      <div className="bg-white p-8 rounded shadow-md">
        <p className="mb-4">
          ¿Estás seguro de que deseas borrar este registro?
        </p>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
            onClick={onClose}
            disabled={isDeleting}
            style={{ zIndex: 100 }}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-white"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Borrando..." : "Borrar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
