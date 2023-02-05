import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allProducts: [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        allProducts: (state, { payload }) => {
            state.allProducts = payload;
        }
    }
})

export const { allProducts } = productsSlice.actions;
export default productsSlice.reducer;