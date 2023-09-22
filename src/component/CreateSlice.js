
import { createSlice } from "@reduxjs/toolkit";

const developerSlice = createSlice({
  name: "developer",
  initialState: {
    developers: [],
  },
  reducers: {
    AddDeveloper: (state, action) => {
      state.developers = [...state.developers, action.payload];
    },
    EditDeveloper: (state, action) => {
      const { selectedIndex, developer } = action.payload;
      state.developers[selectedIndex] = developer;
    },
    RemoveDeveloper: (state, { payload }) => {
      state.developers.splice(payload, 1);
    },
  },
});

export const { AddDeveloper, EditDeveloper, RemoveDeveloper } =
  developerSlice.actions;

export default developerSlice.reducer;
