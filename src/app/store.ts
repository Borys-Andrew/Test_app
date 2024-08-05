import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from 'features/currency/currencySlice';
import userReducer from 'features/user/userSlice';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
