import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import fundsReducer from './slices/fundsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    funds: fundsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
