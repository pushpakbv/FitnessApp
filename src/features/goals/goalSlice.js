import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goals: [], // Array to store user-defined fitness goals
};

const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.goals.push(action.payload); // Add a new goal to the list
    },
    // removeGoal: (state, action) => {
    //   state.goals = state.goals.filter((goal, index) => index !== action.payload); // Remove goal by index
    // },
    removeGoal: (state, action) => {
      state.goals.splice(action.payload, 1);
    },
  },
});

export const { addGoal, removeGoal } = goalSlice.actions;
export default goalSlice.reducer;
