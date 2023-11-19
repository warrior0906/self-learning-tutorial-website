import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSubject: null,
};

export const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    setSubject: (state, action) => {
      state.selectedSubject = action.payload;
    },
  },
});

export const { setSubject } = subjectSlice.actions;

export default subjectSlice.reducer;
