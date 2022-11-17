import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import axios from "axios";


const initialState = {
    isSideBarOpen: false,
    product_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product: {},
    single_product_loading: false,
    single_products_error: false,
}

export const fetch_Product = createAsyncThunk(
    'cart/getProducts',
    async (url, thunkApi) => {
        try {
            const res = await axios(url);
            return res.data
        } catch (error)
        {
            return thunkApi.rejectWithValue('xatolik')
        }
    }
)

export const fetch_Single_Product = createAsyncThunk(
    'cart/get_Single_Products',
    async (url, thunkApi) => {
        try {
            const res = await axios(url);
            console.log(res)
            return res.data
        } catch (error)
        {
            return thunkApi.rejectWithValue('xatoliklar')
        }
    }
)



const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        OpenSideBar: (state, action) => {
            state.isSideBarOpen = true
        },
        CloseSidebar: (state, action) => {
            state.isSideBarOpen = false
        },
    },

    extraReducers: {
        [fetch_Product.pending]: (state, action)=>{
            state.product_loading = true
        },

        [fetch_Product.fulfilled]: (state, action)=>{
            state.featured_products = action.payload
            state.featured_products = action.payload.filter((item)=> item.featured===true)
            state.products = action.payload
            state.product_loading = false
        },

        [fetch_Product.rejected]: (state, action)=>{
            state.product_loading = false
            state.products_error = true
        },



        [fetch_Single_Product.pending]: (state)=>{
            state.single_product_loading = true
            state.single_products_error = false
        },

        [fetch_Single_Product.fulfilled]: (state, action)=>{
            state.single_product_loading = false
            state.single_product = action.payload


        },

        [fetch_Single_Product.rejected]: (state)=>{
            state.single_product_loading = false
            state.single_products_error = true
        },
    }
})


export const {
    OpenSideBar,
    CloseSidebar,
} = slice.actions
export default slice.reducer