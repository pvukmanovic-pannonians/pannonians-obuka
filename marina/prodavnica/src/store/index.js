import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user";
import cartReducer from "./features/cart";

export const store = configureStore({
  reducer: {
    user,
    cart: cartReducer,
  },
});
