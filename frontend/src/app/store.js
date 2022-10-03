import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';
// Store is data layer for application
export const store = configureStore({
  reducer: {
    // Reducer listens to actions
    user: userReducer,
    app: appReducer,
  },
});
