import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  darkLightMode: 'dark' | 'light';
  userId: string;
}

const initialState: IInitialState = {
  darkLightMode: 'light',
  userId: '644d2c50e7b49752f4a34c6b',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode: (state) => {
      state.darkLightMode = state.darkLightMode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
