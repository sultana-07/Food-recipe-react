import React from 'react'
import { useProduct } from '../context'
import TrendingCard from './TrendingCard';

function CartPage() {

    const {cartItems} = useProduct()

    if(cartItems.length ==0) return <h1 className='text-center font-bold text-2xl mt-4'>no item in the cart</h1>;
  return (
   <>
    <h2 className='text-2xl font-bold text-center mt-3'>Cart items</h2>
   <div className='w-full flex flex-wrap justify-center gap-3 mt-5'>
   
    {cartItems.map((item) => (
        <div key={Date.now()}>
        <TrendingCard
    names={item.strMeal}
    instructions={item.strInstructions}
    image={item.strMealThumb}
    btn ={ true}
    id={item.id}
    item = {item}
   />
   </div>
    ))}
   </div>
   </>
  )
}

export default CartPage
