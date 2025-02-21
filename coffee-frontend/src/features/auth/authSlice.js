import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    role: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.role = null;
    },
    updateProfile: (state, action) => {
      // Update only the user information while keeping other state intact
      state.user = { ...state.user, ...action.payload.user };
    },
  },
});

export const { setCredentials, updateProfile, logout } = authSlice.actions;

export default authSlice.reducer;
