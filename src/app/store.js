import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import attractionsMapSlice from '../redux/slices/attractionsMapSlice'
import attractionMapSlice from "../redux/slices/attractionMapSlice";
import categoriesMapSlice from "../redux/slices/categoriesMapSlice";
import attractionsByCategorySlice from "../redux/slices/attractionsByCategorySlice";
import attractionsToShowSlice from "../redux/slices/attractionsToShowSlice";
import categoryButtonsStateSlice from "../redux/slices/categoryButtonsStateSlice";

export const store = configureStore({
  reducer: {
    attractionsMapReducer: attractionsMapSlice,
    attractionMapReducer: attractionMapSlice,
    attractionsByCategoryReducer: attractionsByCategorySlice,
    categoriesMapReducer: categoriesMapSlice,
    attractionsToShowReducer: attractionsToShowSlice,
    categoryButtonsReducer: categoryButtonsStateSlice,
  },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
