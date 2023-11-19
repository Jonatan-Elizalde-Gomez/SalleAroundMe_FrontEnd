import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const attractionsMapSlice = createSlice({
  name: "attractionsMap",
  initialState,
  reducers: {
    getAllAttractionsStart(state) {
      state.loading = true;
    },
    getAllAttractionsSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    getAllAttractionsError(state) {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
    resetState(state){
      state.data = null;
    },
  },
});

export const {
  getAllAttractionsStart,
  getAllAttractionsSuccess,
  getAllAttractionsError,
  resetState,
} = attractionsMapSlice.actions;

export default attractionsMapSlice.reducer;
