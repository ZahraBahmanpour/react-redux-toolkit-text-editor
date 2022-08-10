import { configureStore } from "@reduxjs/toolkit";
import tabsSlice from "./tab/tabsSlice";

export default configureStore({
  reducer: {
    tabs: tabsSlice,
  },
});
