import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [],
  activeKey: 1,
};
export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    openTab: (state, action) => {
      const exist = state.tabs.find((tab) => tab.id === action.payload.id);
      return {
        ...state,
        tabs: exist ? state.tabs : [...state.tabs, action.payload],
        activeKey: action.payload.id,
      };
    },
    closeTab: (state, action) => {
      const { id } = action.payload;
      return { ...state, tabs: state.tabs.filter((tab) => tab.id !== id) };
    },
    activeTab: (state, action) => {
      const { id } = action.payload;
      return { ...state, activeKey: id };
    },
    updateTab: (state, action) => {
      const { id, tempBody } = action.payload;
      return {
        ...state,
        tabs: state.tabs.map((tab) =>
          tab.id === id ? { ...tab, tempBody, unSaved: true } : tab
        ),
      };
    },
  },
});

export const { openTab, closeTab, updateTab, activeTab } = tabsSlice.actions;

export default tabsSlice.reducer;
