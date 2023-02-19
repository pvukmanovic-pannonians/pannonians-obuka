import { configureStore } from "@reduxjs/toolkit";
import users from "./features/users";
import products from './features/products'

export const store = configureStore({
  reducer: {
    users,
    products
  },
});