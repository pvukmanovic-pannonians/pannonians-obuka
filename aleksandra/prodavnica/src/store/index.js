import { configureStore } from '@reduxjs/toolkit';
import user from './features/user';

export const store = configureStore({
  reducer: {
    user
  }
});
