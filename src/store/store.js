import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import entitiesReducer from "./entities";
import uiReducer from "./ui";
import api from "./middleware/api";

const appReducer = combineReducers({
    auth: authReducer,
    entities: entitiesReducer,
    ui: uiReducer,
});

const reducer = (state, action) => {
    if (action.type === "auth/logout") {
        state = undefined;
    }
    return appReducer(state, action);
};

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});

export default store;
