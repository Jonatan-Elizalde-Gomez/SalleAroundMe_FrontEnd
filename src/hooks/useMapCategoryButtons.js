import { useAppDispatch } from "../app/store";
import { activateCategoryButton, deactivateCategoryButton } from "../redux/thunks/categoryButtonsStateThunk";

const useMapCategoryButtons = () => {
  const dispatch = useAppDispatch();

  const handleActivateCategoryButton = () => {
    dispatch(activateCategoryButton());
  };

  const handleDectivateCategoryButton = () => {
    dispatch(deactivateCategoryButton());
  };

  return {
    handleActivateCategoryButton,
    handleDectivateCategoryButton,
  };
};

export default useMapCategoryButtons;
