import React, { useEffect, useState } from 'react'
import {Outlet} from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './context/index'

function Layout() {

  const [cartItems,setCartItems] = useState([]);
  const [recipe,setRecipe] = useState([]);
  const [count,setCount] = useState(0)

  const addToCart = (item) => {
        setCartItems(prev => [item,...prev] );
         setCount(count+1)
  }

  const deleteCart = (id) => {
    setCartItems(cartItems.filter((prev) => prev.id != id))
    setCount(count-1)
  }

  const addRecipe = (title,inst,image) => {
     setRecipe(prev => [{ id : Date.now(), strMeal : title,strInstructions : inst, strMealThumb : image},...prev])
  }

    useEffect(() => {
     const recipe = JSON.parse(localStorage.getItem("recipes"))
  
     if(recipe && recipe.length >0 ){
     
       setRecipe(recipe)
   }},[])
  
   useEffect(() => {
     localStorage.setItem("recipes", JSON.stringify(recipe));
   },[recipe])
   


  console.log(recipe);
  return (
   <CartProvider value={{addToCart,count,cartItems,deleteCart,addRecipe,recipe}}>
   <Header/>
   <Outlet/>
   <Footer/>
   </CartProvider>
  )
}

export default Layout
