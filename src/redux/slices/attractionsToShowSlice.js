import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAll: true,
  showSingle: false,
  showByCategory: false,
};

const attractionsToShowSlice = createSlice({
  name: "attractionsToShow",
  initialState,
  reducers: {
    showAllAttractions(state) {
      state.showAll = true;
      state.showSingle = false;
      state.showByCategory = false;
    },
    showAttraction(state) {
      state.showAll = false;
      state.showSingle = true;
      state.showByCategory = false;
    },
    showAttractionsByCategory(state) {
      state.showAll = false;
      state.showSingle = false;
      state.showByCategory = true;
    },
  },
});

export const {
  showAllAttractions,
  showAttraction,
  showAttractionsByCategory,
} = attractionsToShowSlice.actions;

export default attractionsToShowSlice.reducer;
