import React from 'react'
import {Link} from 'react-router'

function ToppickCard({names,instructions,image,video,id}) {


  return (
   <>
   <Link to={`/${id}`}>
<div href="#" className="max-w-72 flex flex-col items-center border-2  bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{names.slice(0,20)}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{instructions.slice(0,100)}</p>
        <div className='w-full flex '>
        <Link to={`/${id}`} className='dark:text-white cursor-pointer'>Details</Link>
       
        </div>
    </div>
</div>
</Link>

   </>
  )
}

export default ToppickCard
