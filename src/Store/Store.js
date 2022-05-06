import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './Slices/ulSlice';

export const Store = configureStore({
  reducer: {
    ui: uiReducer,
  },
})

