import { privateApi } from "../../api/axios";

import {
  getAttractionStart,
  getAttractionSuccess,
  getAttractionError,
  resetState,
} from "../slices/attractionMapSlice.js";

export const getAttractionById = (id) => async (dispatch) => {
  dispatch(getAttractionStart());
  await privateApi
    .get(`attraction/GetAttractionById/${id}`)
    .then((response) => {
      if (response.data.length < 0) {
        console.log("Error fetching data from API");
        dispatch(getAttractionError("Hubo un error"));
      }
      const data = response.data;
      dispatch(getAttractionSuccess(data));
    })
    .catch((error) => {
      console.log("Error en la consulta: ", error);
    });
};

export const resetAttraction = () => async (dispatch) => {
  dispatch(resetState());
};