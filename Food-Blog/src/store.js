import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./reducers/apiSlice"
import  Counterslice  from "./reducers/counterSlice";

export default configureStore({
    reducer:{
        Counter:Counterslice,
        apiData: apiReducer,
    },
});