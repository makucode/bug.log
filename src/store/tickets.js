import { callRequest } from "./apiActions";

const { createSlice } = require("@reduxjs/toolkit");

const ticketsSlice = createSlice({
    name: "tickets",
    initialState: { tickets: [], loading: false, error: null },
    reducers: {
        ticketsRequested: (tickets, action) => {
            tickets.loading = true;
            tickets.error = null;
        },
        ticketsRequestFailed: (tickets, action) => {
            tickets.loading = false;
            tickets.error = action.payload;
        },
        ticketsFetched: (tickets, action) => {
            tickets.loading = false;
            tickets.tickets = action.payload;
        },
        ticketCreated: (tickets, action) => {
            tickets.loading = false;
            tickets.tickets = [...tickets.tickets, action.payload];
        },
        ticketUpdated: (tickets, action) => {
            tickets.loading = false;
            tickets.tickets = tickets.tickets.map((ticket) =>
                ticket._id !== action.payload._id ? ticket : action.payload
            );
        },
        ticketDeleted: (tickets, action) => {
            tickets.loading = false;
            tickets.tickets = tickets.tickets.filter(
                (ticket) => ticket._id !== action.payload._id
            );
        },
    },
});

const {
    ticketsRequested,
    ticketsRequestFailed,
    ticketsFetched,
    ticketCreated,
    ticketUpdated,
    ticketDeleted,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;

// Actions

const url = "tickets";

export const fetchTickets = () => (dispatch, getState) => {
    dispatch(
        callRequest({
            url,
            method: "get",
            headers: {
                "x-auth-token": getState().auth.user.token,
            },
            onRequest: ticketsRequested.type,
            onSuccess: ticketsFetched.type,
            onError: ticketsRequestFailed.type,
        })
    );
};

export const updateTicket = (_id, data) => (dispatch, getState) => {
    dispatch(
        callRequest({
            url: url + "/" + _id,
            method: "put",
            data,
            onRequest: ticketsRequested.type,
            onSuccess: ticketUpdated.type,
            onError: ticketsRequestFailed.type,
        })
    );
};

export const createTicket = (data) => (dispatch, getState) => {
    dispatch(
        callRequest({
            url,
            method: "post",
            data,
            onRequest: ticketsRequested.type,
            onSuccess: ticketCreated.type,
            onError: ticketsRequestFailed.type,
        })
    );
};

export const deleteTicket = (_id) => (dispatch, getState) => {
    dispatch(
        callRequest({
            url: url + "/" + _id,
            method: "delete",
            onRequest: ticketsRequested.type,
            onSuccess: ticketDeleted.type,
            onError: ticketsRequestFailed.type,
        })
    );
};
