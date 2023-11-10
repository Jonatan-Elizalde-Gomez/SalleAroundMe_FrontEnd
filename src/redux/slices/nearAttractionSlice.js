import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const nearAttractionSlice = createSlice({
  name: "nearAttraction",
  initialState,
  reducers: {
    getNearAttractionStart(state) {
      state.loading = true;
    },
    getNearAttractionSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    getNearAttractionError(state, action) {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  getNearAttractionStart,
  getNearAttractionSuccess,
  getNearAttractionError,
} = nearAttractionSlice.actions;

export default nearAttractionSlice.reducer;
