import { useEffect } from "react";
import { useAppSelector } from "../../../app/store.js";
import useMapAttractionsByCategory from "../../../hooks/useMapAttractionsByCategory.js";
import useMapCategoryButtons from "../../../hooks/useMapCategoryButtons.js";

function CategoryBtn({ id, category, selectedCategory, onSelectCategory }) {
  const { handleGetAllAttractionsByCategory } = useMapAttractionsByCategory();
  const { handleActivateCategoryButton } = useMapCategoryButtons();
  const { selectedCategoryButton } = useAppSelector(
    (state) => state.categoryButtonsReducer
  );

  const handleGetAttractionsByCategory = () => {
    /* Remove the selection of all the category buttons */
    if (selectedCategory === category) {
      onSelectCategory(null);
    } else {
      onSelectCategory(category);
      handleGetAllAttractionsByCategory(id);
      handleActivateCategoryButton();
    }
  };

  useEffect(() => {
    if (!selectedCategoryButton) {
      onSelectCategory(null);
    }
  }, [onSelectCategory, selectedCategoryButton]);

  return (
    <button
      onClick={handleGetAttractionsByCategory}
      className={`bg-sw-white outline-none px-4 py-1 text-sw-black font-medium shadow-md rounded-full hover:bg-sw-main-lighter ${
        selectedCategory === category
          ? "border border-blue-500 text-sw-blue"
          : ""
      }`}
    >
      {category}
    </button>
  );
}

export default CategoryBtn;
