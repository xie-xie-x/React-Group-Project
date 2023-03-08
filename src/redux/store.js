import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
  },
});

export default store;