import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const TokenSlice = createSlice({
    name: "token",
    initialState: "",
    reducers: {
        addToken(state, action) {
            return produce(state, (draftState) => {
                draftState = action.payload;
                console.log(draftState);
            });
        },
        getToken(state, action) {

        },

    },
})

export default TokenSlice.reducer;
export const { addToken, getToken } = TokenSlice.actions;