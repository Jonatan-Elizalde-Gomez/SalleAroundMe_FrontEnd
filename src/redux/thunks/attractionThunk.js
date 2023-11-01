import { privateApi } from "../../api/axios";
import {
  getAttractionsError,
  getAttractionsStart,
  getAttractionsSuccess,
} from "../slices/attractionsSlice";

export const getAttractions = () => async (dispatch) => {
  dispatch(getAttractionsStart());
  await privateApi
    .get("posts/")
    .then((response) => {
      if (response.data.length < 0) {
        console.log("Error fetching data from API");
        dispatch(getAttractionsError("Hubo un error"));
      }
      const data = response.data;
      dispatch(getAttractionsSuccess(data));
    })
    .catch((error) => {
      console.log("Error en la consulta: ", error);
    });
};
