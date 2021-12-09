import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "UI",
    initialState: {
        sidebarOpen: false,
    },
    reducers: {
        sidebarToggled: (UI, action) => {
            UI.sidebarOpen = !UI.sidebarOpen;
        },
        sidebarClosed: (UI, action) => {
            UI.sidebarOpen = false;
        },
    },
});

export const { sidebarToggled, sidebarClosed } = uiSlice.actions;

export default uiSlice.reducer;
