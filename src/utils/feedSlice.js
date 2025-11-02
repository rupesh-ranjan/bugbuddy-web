import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    feed: [],
};

const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        setFeed: (state, action) => {
            state.feed = action.payload;
        },
        clearFeed: (state) => {
            state.feed = [];
        },
    },
});

export const { setFeed, clearFeed } = feedSlice.actions;

export default feedSlice.reducer;
