import { privateApi } from "../../api/axios";
import {
  getCategoriesError,
  getCategoriesStart,
  getCategoriesSuccess,
} from "../slices/categoriesMapSlice";

export const getCategories = () => async (dispatch) => {
  dispatch(getCategoriesStart());
  await privateApi
    .get("attraction/GetAllCategories")
    .then((response) => {
      if (response.data.length < 0) {
        console.log("Error fetching data from API");
        dispatch(getCategoriesError("Hubo un error"));
      }
      const data = response.data;
      dispatch(getCategoriesSuccess(data));
    })
    .catch((error) => {
      console.log("Error en la consulta: ", error);
      dispatch(getCategoriesError("Hubo un error"));
    });
};