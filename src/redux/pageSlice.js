import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numPag: 0
};

export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers:{
        addPage : (state, action) => {
            state.numPag = action.payload;
        }
    }
});

export const {addPage} = pageSlice.actions;
export default pageSlice.reducer;