import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategoryButton: false,
};

const categoryButtonsStateSlice = createSlice({
  name: "categoryButtons",
  initialState,
  reducers: {
    deactivateButton(state) {
      state.selectedCategoryButton = false;
    },
    activateButton(state) {
      state.selectedCategoryButton = true;
    },
  },
});

export const { deactivateButton, activateButton } = categoryButtonsStateSlice.actions;

export default categoryButtonsStateSlice.reducer;
