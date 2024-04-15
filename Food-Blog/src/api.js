import axios from 'axios';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from './reducers/apiSlice';

export const fetchProducts = () => async (dispatch, getState) => {
    const { apiData } = getState();
    if (apiData.products.length === 0) {
        try {
            dispatch(fetchProductsStart());
            const response = await axios.get('https://fakestoreapi.com/products');
            dispatch(fetchProductsSuccess(response.data));
        } catch (error) {
            dispatch(fetchProductsFailure(error.message));
        }
    }
};