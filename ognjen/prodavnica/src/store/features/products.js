import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allProducts: [],
    cartItems: []
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        allProducts: (state, { payload }) => {
            state.allProducts = payload;
        },
        changeCartItems: (state, { payload} ) => {
            state.cartItems = payload
        },
        removeCartItems: (state, { payload} ) => {
            state.cartItems = state.cartItems.filter(item => item.id !== payload.id)
        }
    }
})

export const { allProducts, changeCartItems, removeCartItems } = productsSlice.actions;
export default productsSlice.reducer;