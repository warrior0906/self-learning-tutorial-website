import { configureStore } from "@reduxjs/toolkit";
import subjectSlice from "./slices/subjectSlice";

export const store = configureStore({
  reducer: {
    subject: subjectSlice,
  },
});
