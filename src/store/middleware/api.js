import axios from "axios";
import { callRequest, callFail, callSuccess } from "../apiActions";
import store from "../store";

const api =
    ({ dispatch, getState }) =>
    (next) =>
    async (action) => {
        if (action.type !== callRequest.type) return next(action);

        const { url, data, method, onRequest, onSuccess, onError } =
            action.payload;
        const headers = store.getState().auth.user
            ? { "x-auth-token": store.getState().auth.user.token }
            : {};

        if (onRequest) dispatch({ type: onRequest });

        next(action);

        try {
            const res = await axios.request({
                url: process.env.REACT_APP_API_URL + url,
                method,
                data,
                headers,
            });

            dispatch(callSuccess(res.data));
            if (onSuccess) dispatch({ type: onSuccess, payload: res.data });

            if (method === "PUT" || method === "POST" || method === "DELETE") {
            }
        } catch (error) {
            dispatch(callFail(error.message));
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };

export default api;

// YOU NEED TO SEND TOKEN WITH REQ HEADER !!!
