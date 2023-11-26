import { useAppDispatch } from "../app/store";
import { getAttractionById } from "../redux/thunks/attractionMapThunk";
import { showSingle } from "../redux/thunks/attractionsToShowThunk";

const useMapAttraction = () => {
  const dispatch = useAppDispatch();

  const handleGetAttractionById = async (id) => {
    dispatch(showSingle());
    dispatch(getAttractionById(id));
  };

  return {
    handleGetAttractionById,
  }
};

export default useMapAttraction;
