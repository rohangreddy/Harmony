import { createSlice } from '@reduxjs/toolkit';
// Redux slice for app information
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setChannelId: (state, action) => {
      state.app += action.payload;
    },
  },
});

export const { setChannelId } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.app.value)`
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;