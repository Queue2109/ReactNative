import favoritesReducer from "./favorites";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer,
    },
});
