export interface authValue {
  name: string | null;
  email: string | null;
  password: string | null;
  role: string | null;
  errorMessage: string | null;
  isLoading: boolean;
  otp: string[];
  timeLeft: number;
}

export interface authDefaultState {
  value: authValue;
}
