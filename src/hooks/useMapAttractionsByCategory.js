import { useAppDispatch } from "../app/store";
import { getAllAttractionsByCategory } from "../redux/thunks/attractionsByCategoryThunk";
import { showByCategory } from "../redux/thunks/attractionsToShowThunk";

const useMapAttractionsByCategory = () => {
  const dispatch = useAppDispatch();

  const handleGetAllAttractionsByCategory = async (id) => {
    dispatch(showByCategory());
    dispatch(getAllAttractionsByCategory(id));
  };

  return {
    handleGetAllAttractionsByCategory,
  };
};

export default useMapAttractionsByCategory;
