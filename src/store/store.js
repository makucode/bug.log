import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import api from "./middleware/api";

const reducer = combineReducers({
    auth: authReducer,
});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});

export default store;
