import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  darkLightMode: 'dark' | 'light';
}

const initialState: IInitialState = {
  darkLightMode: 'dark',
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
