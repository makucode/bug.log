import { createSlice } from "@reduxjs/toolkit";
import { callRequest } from "./apiActions";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
        loading: false,
        error: null,
    },
    reducers: {
        projectsRequested: (projects, action) => {
            projects.loading = true;
            projects.error = null;
        },
        projectsRequestFailed: (projects, action) => {
            projects.loading = false;
            projects.error = action.payload;
        },
        projectsFetched: (projects, action) => {
            projects.loading = false;
            projects.projects = action.payload;
        },
        projectCreated: (projects, action) => {
            projects.loading = false;
            projects.projects = [...projects.projects, action.payload];
        },
        projectUpdated: (projects, action) => {
            projects.loading = false;
            projects.projects = projects.projects.map((project) =>
                project._id !== action.payload._id ? project : action.payload
            );
        },
        projectDeleted: (projects, action) => {
            projects.loading = false;
            projects.projects = projects.projects.filter(
                (project) => project._id !== action.payload._id
            );
        },
    },
});

const {
    projectsRequested,
    projectsRequestFailed,
    projectsFetched,
    projectUpdated,
    projectCreated,
    projectDeleted,
} = projectsSlice.actions;

export default projectsSlice.reducer;

// Actions

const url = "projects";

export const fetchProjects = () => (dispatch, getState) => {
    dispatch(
        callRequest({
            url,
            method: "get",
            headers: {
                "x-auth-token": getState().auth.user.token,
            },
            onRequest: projectsRequested.type,
            onSuccess: projectsFetched.type,
            onError: projectsRequestFailed.type,
        })
    );
};

export const updateProject = (_id, data) => (dispatch, getState) => {
    dispatch(
        callRequest({
            url: url + "/" + _id,
            method: "put",
            headers: {
                "x-auth-token": getState().auth.user.token,
            },
            data,
            onRequest: projectsRequested.type,
            onSuccess: projectUpdated.type,
            onError: projectsRequestFailed.type,
        })
    );
};

export const createProject = (data) => (dispatch, getState) => {
    dispatch(
        callRequest({
            url,
            method: "post",
            headers: {
                "x-auth-token": getState().auth.user.token,
            },
            data,
            onRequest: projectsRequested.type,
            onSuccess: projectCreated.type,
            onError: projectsRequestFailed.type,
        })
    );
};

export const deleteProject = (_id) => (dispatch, getState) => {
    dispatch(
        callRequest({
            url: url + "/" + _id,
            method: "delete",
            headers: {
                "x-auth-token": getState().auth.user.token,
            },
            onRequest: projectsRequested.type,
            onSuccess: projectDeleted.type,
            onError: projectsRequestFailed.type,
        })
    );
};
