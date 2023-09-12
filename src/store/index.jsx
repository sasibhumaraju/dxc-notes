import { configureStore } from "@reduxjs/toolkit";
import { timeReducer } from "./Time";

export const store = configureStore({
    reducer: {
        time: timeReducer
    }
})


export * from "./Time";