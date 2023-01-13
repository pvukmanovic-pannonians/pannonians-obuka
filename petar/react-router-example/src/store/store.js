import { configureStore } from "@reduxjs/toolkit";
import blog from "./features/blog";

export const store = configureStore({
  reducer: {
    blog,
  },
});
