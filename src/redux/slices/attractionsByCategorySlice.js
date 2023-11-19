import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const attractionsByCategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getAttractionsByCategoryStart(state) {
      state.loading = true;
    },
    getAttractionsByCategorySuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    getAttractionsByCategoryError(state) {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
    resetState(state){
      state.data = null;
    }
  },
});

export const {
  getAttractionsByCategoryStart,
  getAttractionsByCategorySuccess,
  getAttractionsByCategoryError,
  resetState,
} = attractionsByCategorySlice.actions;

export default attractionsByCategorySlice.reducer;
