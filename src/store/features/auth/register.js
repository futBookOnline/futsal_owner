import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        futsalName: "",
        location: "",
        phoneNumber: "",
        email: "",
        password: "",
    },
    reducers: {
        setFutsalDetails: (state, action) => {
            state.futsalName = action.payload.futsalName;
            state.location = action.payload.location;
            state.phoneNumber = action.payload.phoneNumber;
        },
        setAccountDetails: (state, action) => {
            state.email = action.payload.email,
                state.password = action.payload.password
        }
    }

})

export const { setFutsalDetails, setAccountDetails } = registerSlice.actions;

export default registerSlice.reducer;