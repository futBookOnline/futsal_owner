import { createSlice } from "@reduxjs/toolkit";

export const priceList = createSlice({
    name: "prices",
    initialState: [{
        id: crypto.randomUUID(),
        startingTime: null,
        endingTime: null,
        price: null,
    }],

    reducers: {
        addNewPriceRange: (state) => {
            state.push({
                id: crypto.randomUUID(),
                startingTime: null,
                endingTime: null,
                price: null,
            })
        },
        deletePriceRange: (state, action) => {
            // console.log(action.payload.id)
            return state.filter(item => item.id != action.payload.id);
        },
        setCurrentRangeStartingTime: (state, action) => {
            const { id, startingTime } = action.payload;
            const itemToUpdate = state.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.startingTime = startingTime;
            }
        },
        setCurrentRangeEndingTime: (state, action) => {
            const { id, endingTime } = action.payload;
            const itemToUpdate = state.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.endingTime = endingTime;
            }
        },
        setCurrentRangePrice: (state, action) => {
            const { id, price } = action.payload;
            const itemToUpdate = state.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.price = price;
            }
        },
    }
})

export const {
    addNewPriceRange,
    deletePriceRange,
    setCurrentRangeStartingTime,
    setCurrentRangeEndingTime,
    setCurrentRangePrice } = priceList.actions;

export default priceList.reducer;