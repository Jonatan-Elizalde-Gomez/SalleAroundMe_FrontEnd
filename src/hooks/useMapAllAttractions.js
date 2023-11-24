import { useAppDispatch } from "../app/store";
import { getAllAttractions } from "../redux/thunks/attractionsMapThunk";

const useMapAllAttractions = () => {
    const dispatch = useAppDispatch();

    const handleGetAllAttractions = () => {
        dispatch(getAllAttractions());
    }

    return {
        handleGetAllAttractions
    }
}

export default useMapAllAttractions;