import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../action/authSlice';
import mapReducer from '../action/mapSlice';
import carReducer from '../action/carSlice';
import requestReducer from '../action/requestSlice'; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    map: mapReducer,
    car: carReducer,
    request: requestReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
