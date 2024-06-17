import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
// import { AppThunk } from '../store';
// import { RootState } from '../store';

interface RequestState {
  loading: boolean;
  error: string | null;
  driver: any | null;
}

const initialState: RequestState = {
  loading: false,
  error: null,
  driver: null,
};

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    requestRideStart(state) {
      state.loading = true;
      state.error = null;
      state.driver = null;
    },
    requestRideSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.driver = action.payload;
    },
    requestRideFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.driver = null;
    },
  },
});

export const { requestRideStart, requestRideSuccess, requestRideFailure } = requestSlice.actions;

export const requestRideAction = (requestData: any): AppThunk => async (dispatch) => {
  try {
    dispatch(requestRideStart());

    const response = await axios.post('http://192.168.1.6:4000/api/request-ride', requestData);

    if (response.status === 200) {
      dispatch(requestRideSuccess(null));
    } else {
      dispatch(requestRideFailure('Failed to find driver'));
    }
  } catch (error) {
    dispatch(requestRideFailure('Error finding driver'));
    console.error('Error finding driver:', error);
  }
};

export const setupWebSocket = (): AppThunk => (dispatch) => {
  const ws = new WebSocket('ws://192.168.1.6:4000');

  ws.onopen = () => {
    console.log('WebSocket connected');
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    dispatch(requestRideSuccess(data));
  };

  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  ws.onclose = () => {
    console.log('WebSocket disconnected');
  };
};

export default requestSlice.reducer;
