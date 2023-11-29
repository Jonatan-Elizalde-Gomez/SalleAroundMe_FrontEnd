import { useAppDispatch } from "../app/store";
import { getAllAttractions } from "../redux/thunks/attractionsMapThunk";
import { showAll } from "../redux/thunks/attractionsToShowThunk";

const useMapAllAttractions = () => {
  const dispatch = useAppDispatch();

  const handleGetAllAttractions = () => {
    dispatch(getAllAttractions());
  };

  const handleShowAllAttractions = () => {
    dispatch(showAll());
  };

  return {
    handleGetAllAttractions,
    handleShowAllAttractions,
  };
};

export default useMapAllAttractions;
