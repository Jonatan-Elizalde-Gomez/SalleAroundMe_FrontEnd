import { privateApi } from "../../api/axios";
import {
  getNearAttractionError,
  getNearAttractionStart,
  getNearAttractionSuccess,
} from "../slices/nearAttractionSlice";

export const getNearAttraction = () => async (dispatch) => {
  dispatch(getNearAttractionStart());
  await privateApi
    .get("posts/")
    .then((response) => {
      if (response.data.length < 0) {
        console.log("Error fetching data from API");
        dispatch(getNearAttractionError("Hubo un error"));
      }
      const data = response.data;
      dispatch(getNearAttractionSuccess(data));
    })
    .catch((error) => {
      console.log("Error en la consulta: ", error);
      dispatch(getNearAttractionError("Hubo un error"));
    });
};
