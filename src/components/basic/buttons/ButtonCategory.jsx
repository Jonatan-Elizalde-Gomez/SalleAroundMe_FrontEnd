import useMapAttractionsByCategory from "../../../hooks/useMapAttractionsByCategory.js";

function CategoryBtn({ id, category, selectedCategory, onSelectCategory }) {
  const { handleGetAllAttractionsByCategory } = useMapAttractionsByCategory();

  const handleGetAttractionsByCategory = () => {
    // Si la categoría clicada ya está seleccionada, deselecciónala
    if (selectedCategory === category) {
      onSelectCategory(null);
    } else {
      onSelectCategory(category);
      handleGetAllAttractionsByCategory(id);
    }
  };

  return (
    <button
      onClick={handleGetAttractionsByCategory}
      className={`bg-sw-white px-4 py-1 text-sw-black font-medium shadow-md rounded-full hover:bg-sw-main-lighter ${
        selectedCategory === category
          ? "border border-blue-500 text-blue-500"
          : ""
      }`}
    >
      {category}
    </button>
  );
}

export default CategoryBtn;
