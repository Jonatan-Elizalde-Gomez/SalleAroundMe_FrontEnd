import { privateApi } from "../../api/axios";
import {
  getAllAttractionsStart,
  getAllAttractionsSuccess,
  getAllAttractionsError,
  resetState,
} from "../slices/attractionsMapSlice.js";

export const getAllAttractions = () => async (dispatch) => {
  dispatch(getAllAttractionsStart());
  await privateApi
    .get("attraction/GetAllAttractions")
    .then((response) => {
      if (response.data.length < 0) {
        console.log("Error fetching data from API");
        dispatch(getAllAttractionsError("Hubo un error"));
      }
      const data = response.data;
      dispatch(getAllAttractionsSuccess(data));
    })
    .catch((error) => {
      console.log("Error en la consulta: ", error);
    });
};

export const resetAttractions = () => async (dispatch) => {
  dispatch(resetState());
};