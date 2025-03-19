import React, {  useState } from 'react'
import {Link} from 'react-router'
import { useProduct } from '../context'
import {useLocation} from 'react-router'

function TrendingCard({names,instructions,image,btn,id,item}) {

  const {addToCart,deleteCart}  = useProduct()

  const [isClick,setIsClick] = useState(false)

  const location = useLocation()

  const add = (e) => {
      e.preventDefault()
      addToCart(item);
      setIsClick(true)
  }

  const deleteitem = (e) => {
    e.preventDefault();
    deleteCart(id);
    setIsClick(true);
  }

  return (
   <>
   <div className="max-w-64 h-80 rounded bg-white overflow-hidden shadow-2xl hover:scale-105 duration-200">
  <img className="w-full h-40" src={image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4   ">
    <div className="font-bold text-xl mb-2">{names.slice(0,14)}</div>
    <p className="text-gray-700 text-base">  {instructions.slice(0,40)}......</p>
     
    
   
  </div >
 
   <div className='w-full flex justify-between px-1'>
   {btn ?  <Link to={`/${id}`} className='bg-red-500 text-white px-5 py-2 rounded-2xl text-sm'>TRY</Link>: ""}
   {location.pathname == "/cart" ? <button onClick={deleteitem} className=' cursor-pointer bg-black text-white px-3 py-2 rounded-2xl text-sm'>
   {isClick ? "success": "remove cart"}</button> : <button onClick={add} className=' cursor-pointer bg-black text-white px-3 py-2 rounded-2xl text-sm'>
   {isClick ? "success": "Add cart"}</button>}
  
   </div>

</div>
   </>
  )
}

export default TrendingCard
