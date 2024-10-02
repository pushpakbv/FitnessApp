import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workouts: [], // Array to store logged workouts
};

const workoutSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    addWorkout: (state, action) => {
      state.workouts.push(action.payload); // Add new workout to the list
    },
    removeWorkout: (state, action) => {
      state.workouts.splice(action.payload, 1);
    }
  },
});

export const { addWorkout,removeWorkout } = workoutSlice.actions;

export default workoutSlice.reducer;
