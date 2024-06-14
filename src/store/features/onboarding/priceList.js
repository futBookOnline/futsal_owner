import { createSlice } from "@reduxjs/toolkit";

export const priceList = createSlice({
    name: "prices",
    initialState: [{
        startingTime: null,
        endingTime: null,
        price: null,
    }],

    reducers: {
        setNewPriceRange: (state) => {
            state.concat({
                startingTime: null,
                endingTime: null,
                price: null,
            })
        }
    }
})

export const { setNewPriceRange } = priceList.actions;

export default priceList.reducer;