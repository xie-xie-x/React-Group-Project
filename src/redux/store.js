import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: missionsSlice,
  },
});

export default store;
