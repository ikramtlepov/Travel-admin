import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    destinations: [],
    isDestLoad: false,
   isDestError : null
   
};

const destinationSlice = createSlice({
    name: 'destination',
    initialState,
    reducers: {
        fetchingDestData: (state) => {
            state.isDestLoad = true;
        },
        fetchedDestData: (state, action) => {
            state.isDestLoad = false;
            state.destinations = action.payload;
        },
        fetchedDestDataErr: (state, action) => {
            state.isDestLoad = false;
            state.isDestError = action.payload;
        },
    },
});

export const { fetchingDestData, fetchedDestData, fetchedDestDataErr } = destinationSlice.actions;
export default destinationSlice.reducer;
