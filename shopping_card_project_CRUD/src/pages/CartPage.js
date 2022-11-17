import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {CartContent, PageHero} from '../components'
import {useDispatch, useSelector} from "react-redux";
import {Count_Cart_Totals} from "../store/slice_Cart"

const CartPage = () => {
    const dispatch = useDispatch()
    const {cart} = useSelector((store) => store.slice_Cart)


    useEffect(() => {
        dispatch(Count_Cart_Totals())
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    if (cart.length < 1) {
        return (
            <Wrapper className='page-100'>
                <div className='empty'>
                    <h2>Your cart is empty</h2>
                    <Link to={'/products'} className={'btn'}> fill it</Link>
                </div>
            </Wrapper>
        )
    }

    return (
        <main>
            <PageHero title='cart'/>
            <Wrapper className='page'>
                <CartContent/>
            </Wrapper>
        </main>
    )
}


const Wrapper = styled.main`
  .empty {
    text-align: center;

    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
