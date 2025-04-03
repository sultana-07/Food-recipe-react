import React, {  useState } from 'react'
import {NavLink} from 'react-router'
import { useProduct } from '../context'


function Header() {

    const {count} = useProduct()

   
        const [isOpen, setIsOpen] = useState(false);

   return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className=" text-lg font-bold">Food-Recipe</a>

        {/* Toggle Button for Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-black md:hidden focus:outline-none"
        >
         ☰
        </button>

        {/* Menu Items */}
        <div className={`absolute md:relative bg-white md:bg-transparent w-full md:w-36 left-0 top-16 md:top-0 p-4 md:p-0 md:flex space-y-4 md:space-y-0 md:space-x-6 ${isOpen ? "block h-screen z-30" : "hidden"}`}>
        <NavLink
         onClick={() => setIsOpen(false)} 
         to=""
         className={({isActive}) =>
        `block font-bold py-2 pr-4 pl-3 ${isActive ? `text-orange-700 ` : "text-black"} duration-200 border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
        }
      >
      Home
    </NavLink>

     <NavLink
      onClick={() => setIsOpen(false)} 
      to="/cart"
      className={({isActive}) =>
        `block font-bold  py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-black"} duration-200 border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
        }
         >
       cart : {count}
      </NavLink>
        </div>
      </div>
    </nav>
  );
};


export default Header




