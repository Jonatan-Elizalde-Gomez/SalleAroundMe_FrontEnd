import { useAppDispatch } from "../app/store";
import { getCategories } from "../redux/thunks/categoriesMapThunk";

const useMapCategories = () => {
  const dispatch = useAppDispatch();

  const handleGetCategories = () => {
    dispatch(getCategories());
  };
  return {
    handleGetCategories,
  };
};

export default useMapCategories;
