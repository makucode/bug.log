import { createSlice } from "@reduxjs/toolkit";
import { callRequest } from "./apiActions";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {
        usersRequested: (users, action) => {
            users.loading = true;
            users.error = null;
        },
        usersRequestFailed: (users, action) => {
            users.loading = false;
            users.error = action.payload;
        },
        usersFetched: (users, action) => {
            users.loading = false;
            users.users = action.payload;
        },
        userUpdated: (users, action) => {
            users.loading = false;
            users.users = users.users.map((user) =>
                user._id !== action.payload._id ? user : action.payload
            );
        },
        userDeleted: (users, action) => {
            users.loading = false;
            users.users = users.users.filter(
                (user) => user._id !== action.payload._id
            );
        },
    },
});

const {
    usersRequested,
    usersRequestFailed,
    usersFetched,
    userUpdated,
    userDeleted,
} = usersSlice.actions;

export default usersSlice.reducer;

// Actions

const url = "users";

export const fetchUsers = () => (dispatch, getState) => {
    dispatch(
        callRequest({
            url,
            method: "get",
            headers: {
                "x-auth-token": getState().auth.user.token,
            },
            onRequest: usersRequested.type,
            onSuccess: usersFetched.type,
            onError: usersRequestFailed.type,
        })
    );
};

export const updateUser = (_id, data) => (dispatch, getState) => {
    dispatch(
        callRequest({
            url: url + "/" + _id,
            method: "put",
            headers: {
                "x-auth-token": getState().auth.user.token,
            },
            data,
            onRequest: usersRequested.type,
            onSuccess: userUpdated.type,
            onError: usersRequestFailed.type,
        })
    );
};

export const deleteUser = (_id) => (dispatch, getState) => {
    const user = getState().auth.user;

    if (user.role !== "admin" && user._id !== _id) {
        return dispatch({
            type: usersRequestFailed.type,
            payload: "Insufficient Permissions",
        });
    }

    dispatch(
        callRequest({
            url: url + "/" + _id,
            method: "delete",
            headers: {
                "x-auth-token": getState().auth.user.token,
            },
            onRequest: usersRequested.type,
            onSuccess: userDeleted.type,
            onError: usersRequestFailed.type,
        })
    );
};
