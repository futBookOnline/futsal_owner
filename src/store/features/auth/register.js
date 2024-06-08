import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    futsalName: "",
    location: "",
    phoneNumber: "",
    email: "",
    password: "",
    verificationCode: "",
  },
  reducers: {
    setFutsalDetails: (state, action) => {
      state.futsalName = action.payload.futsalName;
      state.location = action.payload.location;
      state.phoneNumber = action.payload.phoneNumber;
    },
    setAccountDetails: (state, action) => {
      (state.email = action.payload.email),
        (state.password = action.payload.password);
    },
    setVerificationCode: (state, action) => {
      state.verificationCode = action.payload.verificationCode;
    },
  },
});

export const { setFutsalDetails, setAccountDetails, setVerificationCode } =
  registerSlice.actions;

export default registerSlice.reducer;
