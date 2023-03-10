import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch(url);
  if (response) {
    const data = await response.json();
    return data;
  }
  return [];
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => ({
      ...state,
      missions: action.payload,
    }),
  },
  extraReducers: (construct) => {
    construct.addCase(fetchMissions.fulfilled, (state, action) => ({
      ...state,
      missions: action.payload.map((mission) => ({ ...mission, joined: false })),
    }));
  },
});

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
