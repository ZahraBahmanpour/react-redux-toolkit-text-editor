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
    closeTab: (state, action) => {
      const { id } = action.payload;
      return { ...state, tabs: state.tabs.filter((tab) => tab.id !== id) };
    },
  },
});

export const { openTab, closeTab } = tabsSlice.actions;

export default tabsSlice.reducer;
