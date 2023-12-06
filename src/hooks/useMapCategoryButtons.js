import { useAppDispatch } from "../app/store";
import { activateCategoryButton, deactivateCategoryButton } from "../redux/thunks/categoryButtonsStateThunk";

const useMapCategoryButtons = () => {
  const dispatch = useAppDispatch();

  const handleActivateCategoryButton = () => {
    dispatch(activateCategoryButton());
  };

  const handleDeactivateCategoryButton = () => {
    dispatch(deactivateCategoryButton());
  };

  return {
    handleActivateCategoryButton,
    handleDeactivateCategoryButton,
  };
};

export default useMapCategoryButtons;
