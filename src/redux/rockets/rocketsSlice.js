import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRocket = createAsyncThunk('fetchRocket', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const rocketList = [];
  data.forEach((item) => {
    rocketList.push({
      id: item.id,
      name: item.rocket_name,
      description: item.description,
      flickr_images: item.flickr_images[0],
      reserved: false,
    });
  });
  return rocketList;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    reserveRocket(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocket.fulfilled, (state, action) => action.payload);
  },
});

export const { reserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
