import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchValue } from "@/types";

const initialState: { value: searchValue } = {
  value: { query: "" },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateQuery(state, action: PayloadAction<string>) {
      state.value.query = action.payload;
    },
  },
});

export const { updateQuery } = searchSlice.actions;

export default searchSlice.reducer;
