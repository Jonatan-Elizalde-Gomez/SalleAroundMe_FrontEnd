import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const categoriesMapSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategoriesStart(state) {
      state.loading = true;
    },
    getCategoriesSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    getCategoriesError(state) {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesError,
} = categoriesMapSlice.actions;

export default categoriesMapSlice.reducer;
