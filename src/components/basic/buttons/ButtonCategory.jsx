import { useEffect } from "react";
import { useAppSelector } from "../../../app/store.js";
import useMapAttractionsByCategory from "../../../hooks/useMapAttractionsByCategory.js";
import useMapAllAttractions from "../../../hooks/useMapAllAttractions.js";
import useMapCategoryButtons from "../../../hooks/useMapCategoryButtons.js";
import useMapAttraction from "../../../hooks/useMapAttraction.js";

function CategoryBtn({ id, category, selectedCategory, onSelectCategory }) {
  const {
    handleGetAllAttractionsByCategory,
    handleResetAllAttractionsByCategory,
  } = useMapAttractionsByCategory();
  const { handleShowAllAttractions } = useMapAllAttractions();
  const { handleActivateCategoryButton, handleDeactivateCategoryButton } =
    useMapCategoryButtons();
  const { handleResetAttraction } = useMapAttraction();
  const { selectedCategoryButton } = useAppSelector(
    (state) => state.categoryButtonsReducer
  );

  const handleGetAttractionsByCategory = () => {
    /* Remove the selection of all the category buttons */
    if (selectedCategory === category) {
      onSelectCategory(null);
      handleShowAllAttractions(id);
      handleDeactivateCategoryButton();
      handleResetAllAttractionsByCategory();
      handleResetAttraction();
    } else {
      onSelectCategory(category);
      handleGetAllAttractionsByCategory(id);
      handleActivateCategoryButton();
      handleResetAttraction();
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
