import { useAppDispatch } from "../app/store";
import {
  getNearestAttractions,
} from "../redux/thunks/nearestAttractionsThunk";

const useMapNearestAttractions = () => {
  const dispatch = useAppDispatch();

  const handleGetNearestAttractions = () => {
    dispatch(getNearestAttractions());
  };
  return {
    handleGetNearestAttractions,
  };
};

export default useMapNearestAttractions;
