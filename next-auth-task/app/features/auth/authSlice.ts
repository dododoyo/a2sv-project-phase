import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authValue, authDefaultState } from "@/types";

const initialState: authDefaultState = {
  value: {
    name: "",
    email: "",
    password: "",
    role: "",
    errorMessage: "",
    isLoading: false,
    otp: ["", "", "", ""],
    timeLeft: 30,
  } as authValue,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.value.name = action.payload;
    },
    updateEmail(state, action: PayloadAction<string>) {
      state.value.email = action.payload;
    },
    updatePassword(state, action: PayloadAction<string>) {
      state.value.password = action.payload;
    },
    updateRole(state, action: PayloadAction<string>) {
      state.value.role = action.payload;
    },
    updateErrorMessage(state, action: PayloadAction<string | null>) {
      state.value.errorMessage = action.payload;
    },
    updateIsLoading(state, action: PayloadAction<boolean>) {
      state.value.isLoading = action.payload;
    },
    updateOtp(state, action: PayloadAction<string[]>) {
      state.value.otp = action.payload;
    },
    updateTimeLeft(state, action: PayloadAction<number>) {
      state.value.timeLeft = action.payload;
    },
  },
});

export const {
  updateEmail,
  updateName,
  updatePassword,
  updateRole,
  updateErrorMessage,
  updateIsLoading,
  updateOtp,
  updateTimeLeft,
} = authSlice.actions;
export default authSlice.reducer;
