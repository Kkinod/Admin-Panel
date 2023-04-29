import { combineReducers, configureStore } from '@reduxjs/toolkit';
import globalReducer from '../features/globalSlice';

const rootReducer = combineReducers({
  global: globalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
