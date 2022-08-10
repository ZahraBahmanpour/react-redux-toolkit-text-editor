import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [],
};
export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    openTab: (state, action) => {
      return { ...state, tabs: [...state.tabs, action.payload] };
    },
  },
});

export const { openTab } = tabsSlice.actions;

export default tabsSlice.reducer;
