import { configureStore } from "@reduxjs/toolkit";
import users from "./features/users";

export const store = configureStore({
  reducer: {
    users,
  },
});