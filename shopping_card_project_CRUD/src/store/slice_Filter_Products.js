import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    all_products: [],
    filtered_products: [],
    grid_view: true,
    sort: 'price_lowest',
    filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
    }
}


const slice_Filter_Products = createSlice({
    name: 'slice_filter',
    initialState,
    reducers: {
        Load_Products: (state, action) => {
            let maxPrice = action.payload.map((p) => p.price)
            maxPrice = Math.max(...maxPrice)
            state.filters.max_price = maxPrice
            state.filters.price = maxPrice
            state.all_products = [...action.payload]
            state.filtered_products = [...action.payload]
        },
        setGridView: (state, action) => {
            state.grid_view = true
        },
        setListView: (state, action) => {
            state.grid_view = false
        },
        updateSort: (state, action) => {
            state.sort = action.payload
        },
        Sort_products: (state, action) => {
            let temProducts = [...state.filtered_products]
            if (state.sort === 'price-lowest') {
                temProducts = temProducts.sort((a, b) => a.price - b.price)
            }
            if (state.sort === 'price-highest') {
                temProducts = temProducts.sort((a, b) => b.price - a.price)
            }
            if (state.sort === 'name-a') {
                temProducts = temProducts.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
            }
            if (state.sort === 'name-z') {
                temProducts = temProducts.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            }
            state.filtered_products = temProducts
        },
        update_Filters: (state, action) => {
            const {name, value} = action.payload
            return {...state, filters: {...state.filters, [name]: value}}
        },
        filter_Products: (state, action) => {
            const {text, company, category, color, price, shipping} = state.filters
            let tempProducts = [...state.all_products]
            // search
            if (text) {
                tempProducts = tempProducts.filter((product) =>
                    product.name.toLowerCase().startsWith(text)
                )
            }
            // category
            if (category !== 'all') {
                tempProducts = tempProducts.filter((product) =>
                    product.category === category
                )
            }
            // company
            if (company !== 'all') {
                tempProducts = tempProducts.filter((product) =>
                    product.company === company
                )
            }
            // color
            // colors is an array, that is why find method
            if (color !== 'all') {
                tempProducts = tempProducts.filter((product) => {
                        return product.colors.find((c) => c === color)
                    }
                )
            }
            //price
            tempProducts = tempProducts.filter((product)=>product.price <= price)
            if (shipping) {
                tempProducts = tempProducts.filter((product) =>
                    product.shipping === true
                )
            }


            state.filtered_products = tempProducts
        },
        clearFilters: (state, action) => {

            state.filters.text = ''
            state.filters.company = 'all'
            state.filters.category = 'all'
            state.filters.color = 'all'
            state.filters.price = state.filters.max_price
            state.filters.shipping = false
        }
    },
})


export const {
    Load_Products, setGridView, setListView, updateSort, Sort_products, update_Filters, filter_Products, clearFilters
} = slice_Filter_Products.actions
export default slice_Filter_Products.reducer