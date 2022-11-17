import React from 'react'
import GridView from './GridView'
import ListView from './ListView'
import {useSelector} from "react-redux";

const ProductList = () => {
  const {filtered_products, grid_view} = useSelector((store) => store.slice_Filter_Products)
  if (filtered_products.length < 1) {
    return (
        <h5 style={{ textTransform: 'none' }}>
          Sorry, no products matched your search...
        </h5>
    )
  }
  if (grid_view === false) {
    return <ListView filtered_products={filtered_products}/>
  }
  return <GridView filtered_products={filtered_products}>product list </GridView>
}

export default ProductList
