import { useAppDispatch } from "../app/store";
import {
  getNearestAttractions,
  resetAttractions,
} from "../redux/thunks/nearestAttractionsThunk";

const useMapNearestAttractions = () => {
  const dispatch = useAppDispatch();

  const handleGetNearestAttractions = (lat, lng) => {
    dispatch(getNearestAttractions(lat, lng));
  };

  const handleReset = () => {
    dispatch(resetAttractions());
  }
  return {
    handleGetNearestAttractions,
    handleReset,
  };
};

export default useMapNearestAttractions;
