import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Opportunity, opportunityDefaultState } from "@/types";

const initialState: opportunityDefaultState = {
  value: [],
};

const opportunitySlice = createSlice({
  name: "opportunity",
  initialState,
  reducers: {
    updateOpportunity(state, action: PayloadAction<Opportunity[]>) {
      state.value = action.payload;
    },
    addOpportunity(state, action: PayloadAction<Opportunity>) {
      state.value.push(action.payload);
    },
    removeOpportunity(state, action: PayloadAction<Opportunity>) {
      state.value.filter((opportunity) => opportunity.id !== action.payload.id);
    },
  },
});

export const { updateOpportunity, addOpportunity, removeOpportunity } =
  opportunitySlice.actions;

export default opportunitySlice.reducer;
