import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk action để thực hiện đăng nhập
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      console.log('Sending to server:', { username, password }); 
      const response = await axios.post('http://localhost:4000/api/login', { username, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Tạo authSlice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') ?? null,
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    logoutUser: state => {
      localStorage.removeItem('token');
      state.token = null;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: {
    [loginUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
      // Lưu token vào localStorage
      localStorage.setItem('token', action.payload.token);
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
