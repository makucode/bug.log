import { createSlice } from "@reduxjs/toolkit";
import { callRequest } from "./apiActions";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
        loading: false,
        error: null,
    },
    reducers: {
        commentsRequested: (comments, action) => {
            comments.loading = true;
            comments.error = null;
        },
        commentsRequestFailed: (comments, action) => {
            comments.loading = false;
            comments.error = action.payload;
        },
        commentsFetched: (comments, action) => {
            comments.loading = false;
            comments.comments = action.payload;
        },
        commentCreated: (comments, action) => {
            comments.loading = false;
            comments.comments = [...comments.comments, action.payload];
        },
        commentUpdated: (comments, action) => {
            comments.loading = false;
            comments.comments = comments.comments.map((comment) =>
                comment._id !== action.payload._id ? comment : action.payload
            );
        },
        commentDeleted: (comments, action) => {
            comments.loading = false;
            comments.comments = comments.comments.filter(
                (comment) => comment._id !== action.payload._id
            );
        },
    },
});

const {
    commentsRequested,
    commentsRequestFailed,
    commentsFetched,
    commentCreated,
    commentUpdated,
    commentDeleted,
} = commentsSlice.actions;

export default commentsSlice.reducer;

// Actions

const url = "comments";

export const fetchComments = () => (dispatch, getState) => {
    dispatch(
        callRequest({
            url,
            method: "get",
            headers: {
                "x-auth-token": getState().auth.user.token,
            },
            onRequest: commentsRequested.type,
            onSuccess: commentsFetched.type,
            onError: commentsRequestFailed.type,
        })
    );
};

export const updateComment = (_id, data) => (dispatch, getState) => {
    dispatch(
        callRequest({
            url: url + "/" + _id,
            method: "put",
            headers: {
                "x-auth-token": getState().auth.user.token,
            },
            data,
            onRequest: commentsRequested.type,
            onSuccess: commentUpdated.type,
            onError: commentsRequestFailed.type,
        })
    );
};

export const createComment = (data) => (dispatch, getState) => {
    dispatch(
        callRequest({
            url,
            method: "post",
            headers: {
                "x-auth-token": getState().auth.user.token,
            },
            data,
            onRequest: commentsRequested.type,
            onSuccess: commentCreated.type,
            onError: commentsRequestFailed.type,
        })
    );
};

export const deleteComment = (_id) => (dispatch, getState) => {
    dispatch(
        callRequest({
            url: url + "/" + _id,
            method: "delete",
            headers: {
                "x-auth-token": getState().auth.user.token,
            },
            onRequest: commentsRequested.type,
            onSuccess: commentDeleted.type,
            onError: commentsRequestFailed.type,
        })
    );
};
