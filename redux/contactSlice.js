import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        contactStart: (state) => {
            state.loading = true;
        },
        contactSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        contactFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const {
    contactFailure,
    contactStart,
    contactSuccess
} = contactSlice.actions;

export default contactSlice.reducer;
