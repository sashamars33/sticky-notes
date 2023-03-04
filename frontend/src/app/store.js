import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import pageReducer from '../features/pages/pageSlice'
import noteReducer from '../features/notes/noteSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pages: pageReducer,
    notes: noteReducer,
  },
});
