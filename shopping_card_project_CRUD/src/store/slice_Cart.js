import {createSlice} from '@reduxjs/toolkit';
import {getLocalStorage} from "../utils/stateHelpers";
const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534,
}
const slice_Cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        Add_To_Cart: (state, action) => {
            const {id, color, amount, single_product} = action.payload
            // if the item is not in a cart
            const tempItem = state.cart.find((item) => item.id === id + color)
            // if item in cart
            if (tempItem) {
                const tempCart = state.cart.map((item) => {
                        if (item.id === id + color) {
                            let newAmount = item.amount + amount
                            if (newAmount > item.max) {
                                newAmount = item.max
                            }
                            return {...item, amount: newAmount}
                        } else {
                            return item
                        }
                    }
                )

                return {...state, cart: tempCart}
                // we are creating new item
            } else {
                const newItem = {
                    id: id + color,
                    name: single_product.name,
                    color,
                    amount,
                    image: single_product.images[0].url,
                    price: single_product.price,
                    max: single_product.stock
                }
                state.cart = [...state.cart, newItem]
            }
        },
        clearCart: (state, action) => {
            state.cart = []
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        toggleAmount: (state, action) =>{
            const {id} = action.payload
            const tempCart = state.cart.map((item) => {
                if (item.id === id) {
                    if (action.payload.inc) {
                        let newAmount = item.amount + 1
                        if (newAmount > item.max) {
                            newAmount = item.max
                        }
                        return { ...item, amount: newAmount }
                    }
                    if (action.payload.dec) {
                        let newAmount = item.amount - 1
                        if (newAmount < 1) {
                            newAmount = 1
                        }
                        return { ...item, amount: newAmount }
                    }
                }
                return item
            })
            return { ...state, cart: tempCart }
        },
        Count_Cart_Totals: (state, action)=>{
            const {item_total, item_amount } = state.cart.reduce((total, cartItem)=>
            {
                const {amount, price} = cartItem
                total.item_total += amount
                total.item_amount +=price * amount
                return total
            },{item_total: 0, item_amount:0})

            state.total_items = item_total
            state.total_amount = item_amount
        },
    }
})


export const {Add_To_Cart, clearCart, removeItem, toggleAmount, Count_Cart_Totals} = slice_Cart.actions
export default slice_Cart.reducer