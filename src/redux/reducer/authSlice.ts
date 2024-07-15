import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  user: {
    username: string;
    email: string;
  } | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string; email: string }>) {
      state.isLoggedIn = true;
      state.user = {
        username: action.payload.username,
        email: action.payload.email,
      };
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

// Export action creators and reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;