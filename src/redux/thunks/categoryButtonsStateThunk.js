import {
  deactivateButton,
  activateButton,
} from "../slices/categoryButtonsStateSlice";


export const deactivateCategoryButton = () => (dispatch) => {
  dispatch(deactivateButton());
};

export const activateCategoryButton = () => (dispatch) => {
  dispatch(activateButton());
};
