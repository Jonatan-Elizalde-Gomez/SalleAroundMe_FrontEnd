import { privateApi } from "../../api/axios";
import {
    getAttractionsByCategoryStart,
    getAttractionsByCategorySuccess,
    getAttractionsByCategoryError,
    resetState,
} from "../slices/attractionsByCategorySlice.js";

export const getAllAttractionsByCategory = (id) => async (dispatch) => {
  dispatch(getAttractionsByCategoryStart());
  await privateApi
    .get(`attraction/GetAttractionsByCategory/${id}`)
    .then((response) => {
      if (response.data.length < 0) {
        console.log("Error fetching data from API");
        dispatch(getAttractionsByCategoryError("Hubo un error"));
      }
      const data = response.data;
      dispatch(getAttractionsByCategorySuccess(data));
    })
    .catch((error) => {
      console.log("Error en la consulta: ", error);
    });
};

export const resetAttractionsByCategory = () => async (dispatch) => {
  dispatch(resetState());
};