import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../slices/menuSlice";
import playerReducer from "../slices/playerSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    player: playerReducer,
  },
});

export default store;

// ✅ Correct Types (VERY IMPORTANT)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
