import { privateApi } from "../../api/axios";
import {
  getNearestAttractionsStart,
  getNearestAttractionsSuccess,
  getNearestAttractionsError,
  resetState,
} from "../slices/nearestAttractionsSlice";

export const getNearestAttractions = (lat, lng) => async (dispatch) => {
  dispatch(getNearestAttractionsStart());
  await privateApi
    .get("attraction/GetTopAttracions/"+lat+"/"+lng)
    .then((response) => {
      if (response.data.length < 0) {
        dispatch(getNearestAttractionsError("Hubo un error"));
      }
      const data = response.data;
      dispatch(getNearestAttractionsSuccess(data));
    })
    .catch((error) => {
      console.log("Error en la consulta: ", error);
    });
};

export const resetAttractions = () => async (dispatch) => {
  dispatch(resetState());
};
