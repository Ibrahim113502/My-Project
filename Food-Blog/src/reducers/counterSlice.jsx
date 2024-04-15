import { createSlice } from "@reduxjs/toolkit";
export const Counterslice = createSlice({
    name: "Counter",
    initialState: {
        CounterValue: 0,
    },
    reducers: {
        increment: (state) => {
            state.CounterValue += 1
        }
        ,
        decrement: (state) => { state.CounterValue -= 1; },

    }
})
export const { increment, decrement } = Counterslice.actions;
export default Counterslice.reducer