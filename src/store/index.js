import { configureStore } from "@reduxjs/toolkit";
import TokenSlice from "./slices/TokenSlice";

const store=configureStore({
    reducer:{
        token:TokenSlice,
    }
})

export default store;