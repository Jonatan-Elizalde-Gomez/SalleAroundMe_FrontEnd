import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const attractionsSlice = createSlice({
  name: "attractions",
  initialState,
  reducers: {
    getAttractionsStart(state) {
      state.loading = true;
    },
    getAttractionsSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    getAttractionsError(state, action) {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
    getAttractionStart(state) {
      state.loading = true;
    },
    getAttractionSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    getAttractionError(state, action) {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
    getAttractionsByCategoryStart(state) {
      state.loading = true;
    },
    getAttractionsByCategorySuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    getAttractionsByCategoryError(state, action) {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  getAttractionsStart,
  getAttractionsSuccess,
  getAttractionsError,
  getAttractionStart,
  getAttractionSuccess,
  getAttractionError,
  getAttractionsByCategoryStart,
  getAttractionsByCategorySuccess,
  getAttractionsByCategoryError,
} = attractionsSlice.actions;

export default attractionsSlice.reducer;
