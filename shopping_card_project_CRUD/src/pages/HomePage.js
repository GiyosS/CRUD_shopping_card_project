import React, {useEffect} from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import {useDispatch} from "react-redux";

import {fetch_Product} from "../store/slice";
import {products_url} from "../utils/constants";


const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_Product(products_url))
  }, []);

  return <main>
    <Hero/>
    <FeaturedProducts/>
    <Services/>
    <Contact/>
  </main>
}

export default HomePage
