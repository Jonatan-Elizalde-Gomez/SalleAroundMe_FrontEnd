import { useAppDispatch } from "../app/store";
import { getAttractionById, resetAttraction } from "../redux/thunks/attractionMapThunk";
import { showSingle } from "../redux/thunks/attractionsToShowThunk";

const useMapAttraction = () => {
  const dispatch = useAppDispatch();

  const handleGetAttractionById = async (id) => {
    dispatch(showSingle());
    dispatch(getAttractionById(id));
  };

  const handleResetAttraction = () => {
    dispatch(resetAttraction());
  }

  return {
    handleGetAttractionById,
    handleResetAttraction,
  };
};

export default useMapAttraction;
