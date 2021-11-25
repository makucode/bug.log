import { createSlice } from "@reduxjs/toolkit";
import { callRequest } from "./apiActions";

const authSlice = createSlice({
    name: "auth",
    initialState: JSON.parse(localStorage.getItem("auth")) || {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        userRequested: (auth, action) => {
            auth.loading = true;
            auth.error = null;
        },
        userRequestFailed: (auth, action) => {
            auth.loading = false;
            if (action.payload.includes("404"))
                return (auth.error =
                    "You have entered an invalid username or password");
            auth.error = action.payload;
        },
        userRegistered: (auth, action) => {
            auth.loading = false;
            auth.user = action.payload;
            localStorage.setItem("auth", JSON.stringify(auth));
        },
        userLoggedIn: (auth, action) => {
            auth.loading = false;
            auth.user = action.payload;
            localStorage.setItem("auth", JSON.stringify(auth));
        },
        userLoggedOut: (auth, action) => {
            auth.loading = null;
            auth.user = action.payload;
            localStorage.removeItem("auth");
        },
    },
});

const {
    userRequested,
    userRequestFailed,
    userRegistered,
    userLoggedIn,
    userLoggedOut,
} = authSlice.actions;

export default authSlice.reducer;

// Actions

const userUrl = "users";
const authUrl = "auth";

export const registerUser = (user) => (dispatch) => {
    dispatch(
        callRequest({
            url: userUrl,
            method: "post",
            data: user,
            onRequest: userRequested.type,
            onSuccess: userRegistered.type,
            onError: userRequestFailed.type,
        })
    );
};

export const logInUser = (user) => (dispatch) => {
    dispatch(
        callRequest({
            url: authUrl,
            method: "post",
            data: user,
            onRequest: userRequested.type,
            onSuccess: userLoggedIn.type,
            onError: userRequestFailed.type,
        })
    );
};

export const logOutUser = () => (dispatch) => {
    dispatch({ type: userLoggedOut.type });
};
