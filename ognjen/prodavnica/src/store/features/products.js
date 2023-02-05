import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        allProducts: (state, { payload }) => {
            state.products = payload;
        }
    }
})

export const { products } = productsSlice.actions;
export default productsSlice.reducer;