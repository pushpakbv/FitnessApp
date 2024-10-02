import { configureStore } from '@reduxjs/toolkit';
import goalReducer from '../features/goals/goalSlice';
import workoutReducer from '../features/workouts/workoutSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    goals: goalReducer,
    workouts: workoutReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // If you decide to allow non-serializable values (not recommended)
    }),
});

export default store;
