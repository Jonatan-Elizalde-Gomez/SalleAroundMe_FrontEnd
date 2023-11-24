import { useAppDispatch } from "../app/store";
import { getAllAttractionsByCategory } from "../redux/thunks/attractionsByCategoryThunk";
import { resetAttractions } from "../redux/thunks/attractionsMapThunk";
import { resetAttraction } from "../redux/thunks/attractionMapThunk";

const useMapAttractionsByCategory = () => {
  const dispatch = useAppDispatch();

  const handleGetAllAttractionsByCategory = (id) => {
    dispatch(resetAttractions);
    dispatch(resetAttraction);
    dispatch(getAllAttractionsByCategory(id));
  };

  return {
    handleGetAllAttractionsByCategory,
  };
};

export default useMapAttractionsByCategory;
