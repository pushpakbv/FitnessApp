import { createSlice } from '@reduxjs/toolkit';

// Initial state for the auth slice
const initialState = {
  user: null,
  isAuthenticated: false,
};

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Extract only the serializable properties from the Firebase user object
      const { uid, email, displayName } = action.payload;
      state.user = { uid, email, displayName };  // Only serializable data
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export actions
export const { setUser, clearUser } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
