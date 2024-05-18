import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        fields: {
            futsalName: "",
            location: "",
            phoneNumber: "",
            email: "",
            password: "",
        }
    },
    reducers: {
        setFutsalDetails(state, action) {
            state.fields.futsalName = action.payload.futsalName;
            state.fields.location = action.payload.location;
            state.fields.phoneNumber = action.payload.phoneNumber;
        },
        setAccountDetails(state, action) {
            state.fields.email = action.payload.email,
                state.fields.password = action.payload.password
        }
    }

})

export const { setFutsalDetails, setAccountDetails } = registerSlice.actions;

export default registerSlice.reducer;