
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AppThunk } from '../store';

interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
}

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<{ token: string; user: User }>) {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload.user;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
      state.error = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout, setLoading } = authSlice.actions;

export const signIn = (username: string, password: string): AppThunk => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('http://192.168.1.6:4000/api/login', { username, password });
    const { token, user } = response.data;

    // Lưu token vào AsyncStorage
    await AsyncStorage.setItem('userToken', token);

    // Lưu thông tin người dùng vào Redux state
    dispatch(loginSuccess({ token, user }));
  } catch (error) {
    dispatch(loginFailure('Đăng nhập không thành công'));
  }
};

export const performLogout = (): AppThunk => async (dispatch) => {
  // Xóa token từ AsyncStorage
  await AsyncStorage.removeItem('userToken');

  // Đăng xuất bằng cách cập nhật Redux state
  dispatch(logout());
};

export const checkAuthStatus = (): AppThunk => async (dispatch) => {
  // Kiểm tra xem có token trong AsyncStorage không
  const token = await AsyncStorage.getItem('userToken');
  if (token) {

  } else {
    // Nếu không có token, cập nhật Redux state
    dispatch(logout());
  }
};

export default authSlice.reducer;


