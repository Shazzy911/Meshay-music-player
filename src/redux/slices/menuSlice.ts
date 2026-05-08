"use client"
import { createSlice } from "@reduxjs/toolkit";

type MenuState = {
    menuOpen: boolean;
  };
  type SetMenuOpenAction = {
    type: string;
    payload: boolean;
  };


const menuSlice = createSlice({
    name: "menu",
    initialState:  {menuOpen: false } as MenuState,
    reducers: {
        setMenuOpen: (state, action:SetMenuOpenAction) => { 
            state.menuOpen = action.payload;
         }
    }

})

export const { setMenuOpen} = menuSlice.actions;

export default menuSlice.reducer;


