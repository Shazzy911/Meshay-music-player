import {  configureStore } from "@reduxjs/toolkit";
import menuSlice from "../slices/menuSlice";




// const rootReducer = combineReducers({
//     menu: menuSlice,
// })


const store = configureStore({
    reducer: menuSlice,
})

export type RootState = ReturnType<typeof menuSlice>;
export type AppDispatch = typeof store.dispatch;

export default store;