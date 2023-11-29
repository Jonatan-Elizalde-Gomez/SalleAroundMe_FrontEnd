import { useAppDispatch } from "../app/store";
import {
  getAllAttractionsByCategory,
  resetAttractionsByCategory,
} from "../redux/thunks/attractionsByCategoryThunk";
import { showByCategory } from "../redux/thunks/attractionsToShowThunk";

const useMapAttractionsByCategory = () => {
  const dispatch = useAppDispatch();

  const handleGetAllAttractionsByCategory = async (id) => {
    dispatch(showByCategory());
    dispatch(getAllAttractionsByCategory(id));
  };

  const handleResetAllAttractionsByCategory = () => {
    dispatch(resetAttractionsByCategory());
  };

  return {
    handleGetAllAttractionsByCategory,
    handleResetAllAttractionsByCategory,
  };
};

export default useMapAttractionsByCategory;
