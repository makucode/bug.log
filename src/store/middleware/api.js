import axios from "axios";
import { callRequest, callFail, callSuccess } from "../apiActions";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== callRequest.type) return next(action);

        const { url, data, method, onRequest, onSuccess, onError, headers } =
            action.payload;

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
        } catch (error) {
            dispatch(callFail(error.message));
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };

export default api;
