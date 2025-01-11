import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../slices/menuSlice";
import playerReducer from "../slices/playerSlice";

// const rootReducer = combineReducers({
//     menu: menuSlice,
// })

const store = configureStore({
  reducer: {
    menuSlice,
    player: playerReducer,
  },
});

export type RootState = ReturnType<typeof menuSlice>;
export type AppDispatch = typeof store.dispatch;

export default store;
