import React, {  useState } from 'react'
import {Link} from 'react-router'
import { useProduct } from '../context'
import {useLocation} from 'react-router'

function TrendingCard({names,instructions,image = null,btn,id = "",item }) {

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
   <div className="w-full md:max-w-60 md:h-80 flex flex-wrap h-40 rounded bg-white overflow-hidden shadow-2xl hover:scale-105 duration-200">
  <div className='w-full flex md:flex-col'>
  <img className="w-40 md:w-full h-40" src={image ? image : "https://icrier.org/wp-content/uploads/2022/12/media-Event-Image-Not-Found.jpg" } alt="Sunset in the mountains"/>
  <div className="px-6 py-4 w-full ">
    <div className="font-bold text-xl mb-2">{names.slice(0,14)}</div>
    <p className="text-gray-700 text-base">  {instructions.slice(0,40)}......</p>

    <div className='w-full md:w-full mt-3 md:ml-0  flex justify-between px-2'>
   {btn ?  <Link to={`/${id}`} className='bg-red-500 text-white px-5 py-2 rounded-2xl text-sm'>TRY</Link>: ""}
   {location.pathname == "/cart" ? <button onClick={deleteitem} className=' cursor-pointer bg-black text-white px-3 py-2 rounded-2xl text-sm'>
   {isClick ? "success": "remove cart"}</button> : <button onClick={add} className=' cursor-pointer bg-black text-white px-3 py-2 rounded-2xl text-sm'>
   {isClick ? "success": "Add cart"}</button>}
  
   </div>
     
    
   
  </div >

 
  </div>

 
  {/* <div className='w-full '>

  <div className='w-[70%] md:w-full md:ml-0 ml-35 flex justify-between px-6'>
   {btn ?  <Link to={`/${id}`} className='bg-red-500 text-white px-5 py-2 rounded-2xl text-sm'>TRY</Link>: ""}
   {location.pathname == "/cart" ? <button onClick={deleteitem} className=' cursor-pointer bg-black text-white px-3 py-2 rounded-2xl text-sm'>
   {isClick ? "success": "remove cart"}</button> : <button onClick={add} className=' cursor-pointer bg-black text-white px-3 py-2 rounded-2xl text-sm'>
   {isClick ? "success": "Add cart"}</button>}
  
   </div>
  </div> */}

</div>
   </>
  )
}

export default TrendingCard
