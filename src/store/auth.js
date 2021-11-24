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
    },
});

const { userRequested, userRequestFailed, userRegistered } = authSlice.actions;

export default authSlice.reducer;

const userUrl = "users";

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
