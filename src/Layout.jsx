import React, { useState } from 'react'
import {Outlet} from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './context/index'

function Layout() {

  const [cartItems,setCartItems] = useState([]);
  const [count,setCount] = useState(0)

  const addToCart = (item) => {
        setCartItems(prev => [item,...prev] );
         setCount(count+1)
  }
  return (
   <CartProvider value={{addToCart,count,cartItems}}>
   <Header/>
   <Outlet/>
   <Footer/>
   </CartProvider>
  )
}

export default Layout
