import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const attractionMapSlice = createSlice({
  name: "attractionsMap",
  initialState,
  reducers: {
    getAttractionStart(state) {
      state.loading = true;
    },
    getAttractionSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    getAttractionError(state) {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
    resetState(state) {
      state.data = null;
    },
  },
});

export const {
  getAttractionStart,
  getAttractionSuccess,
  getAttractionError,
  resetState,
} = attractionMapSlice.actions;

export default attractionMapSlice.reducer;
