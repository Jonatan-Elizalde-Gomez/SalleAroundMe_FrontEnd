import { configureStore } from "@reduxjs/toolkit";
import attractionsSlice from "../redux/slices/attractionsSlice";
import { useDispatch, useSelector } from "react-redux";
import categorySlice from "../redux/slices/categorySlice";
import nearAttractionSlice from "../redux/slices/nearAttractionSlice";

export const store = configureStore({
  reducer: {
    attractionReducer: attractionsSlice,
    categoryReducer: categorySlice,
    nearAttractionReducer: nearAttractionSlice,
  },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
