import { configureStore } from '@reduxjs/toolkit';
import slice from "./store/slice";
import slice_Filter_Products from "./store/slice_Filter_Products";
import slice_Cart from "./store/slice_Cart";
import slice_User from "./store/slice_User";


export const store = configureStore({
    reducer: {
        slice,
        slice_Filter_Products,
        slice_Cart,
        slice_User
    },
})