import React from 'react'
import {Navbar, Sidebar, Footer} from './components'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import {
    Home,
    SingleProduct,
    Cart,
    Error,
    About,
    Products,
    AuthWrapper,
} from './pages'


function App() {
    return (
        <AuthWrapper>
            <BrowserRouter>
                <Navbar/>
                <Sidebar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='products' element={<Products/>}/>
                    <Route path='products/:id' element={<SingleProduct/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </AuthWrapper>
    )
}

export default App
