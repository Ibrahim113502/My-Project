import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    status: 'idle',
    error: null,
};

const apiSlice = createSlice({
    name: 'apiData',
    initialState,
    reducers: {
        fetchProductsStart: (state) => {
            state.status = 'loading';
        },
        fetchProductsSuccess: (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
        },
        fetchProductsFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const selectProducts = (state) => state.apiData.products;
export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = apiSlice.actions;
export default apiSlice.reducer;
