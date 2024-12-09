import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import pageReducer from "./pageSlice"

export const store = configureStore({
    reducer : {
        user : userReducer,
        page: pageReducer,
    }
});