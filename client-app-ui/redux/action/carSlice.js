import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'car',
  initialState: {
    selectedCarType: 'economy',
  },
  reducers: {
    setSelectedCarType: (state, action) => {
      state.selectedCarType = action.payload;
    },
  },
});

export const { setSelectedCarType } = carSlice.actions;
export default carSlice.reducer;
