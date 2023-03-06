import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
  },
});

export default store;
