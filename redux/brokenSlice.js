import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

const brokenFormSlice = createSlice({
    name: 'brokenForm',
    initialState,
    reducers: {
        brokenFormStart: (state) => {
            state.loading = true;
        },
        brokenFormSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        brokenFormFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const {
    brokenFormFailure,
    brokenFormStart,
    brokenFormSuccess
} = brokenFormSlice.actions;

export default brokenFormSlice.reducer;
