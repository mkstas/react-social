import { configureStore } from '@reduxjs/toolkit';
import colorSchemeReducer from './slices/colorShemeSlice';

export const store = configureStore({
  reducer: {
    colorScheme: colorSchemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
