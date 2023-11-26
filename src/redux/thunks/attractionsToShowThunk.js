import {
  showAllAttractions,
  showAttraction,
  showAttractionsByCategory,
} from "../slices/attractionsToShowSlice";

export const showAll = () => (dispatch) => {
  dispatch(showAllAttractions());
};

export const showSingle = () => (dispatch) => {
  dispatch(showAttraction());
};

export const showByCategory = () => (dispatch) => {
  dispatch(showAttractionsByCategory());
};