"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
type ProviderProps = {
    children: React.ReactNode;
}


const Providers: React.FC<ProviderProps> =  ({children}) => { 
    return(

        <Provider store={store}>
            {children}
        </Provider>
    )


 }
 export default Providers;