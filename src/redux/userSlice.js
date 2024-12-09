import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    correo: "RicardoLopLe25@gmail.com",
    key: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addKey : (state, action) => {
            state.key = action.payload;
        }
    }
});

export const {addKey} = userSlice.actions;
export default userSlice.reducer;