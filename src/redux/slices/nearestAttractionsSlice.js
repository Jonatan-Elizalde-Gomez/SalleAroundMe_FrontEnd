import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const nearestAttractionsSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getNearestAttractionsStart(state) {
      state.loading = true;
    },
    getNearestAttractionsSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    getNearestAttractionsError(state) {
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
  getNearestAttractionsStart,
  getNearestAttractionsSuccess,
  getNearestAttractionsError,
  resetState,
} = nearestAttractionsSlice.actions;

export default nearestAttractionsSlice.reducer;
