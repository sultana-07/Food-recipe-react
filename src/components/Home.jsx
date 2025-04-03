import React, { useEffect, useState } from 'react'
import TrendingCard from './TrendingCard'
import ToppickCard from './ToppickCard';
import { useProduct } from '../context';
import { Link } from 'react-router';


function Home() {
    const {cartItems} = useProduct();
    const {recipe} = useProduct();
    

    const [data,setdata] = useState([]);
    const [data2,setdata2] = useState([]);


    useEffect(() => {
       fetch("https://api.freeapi.app/api/v1/public/meals")
       .then(res => res.json())
       .then(res => setdata(res.data.data));

       fetch("https://api.freeapi.app/api/v1/public/meals?page=2")
       .then(res => res.json())
       .then(res => setdata2(res.data.data))
    },[])
   console.log(cartItems)
    
  return (
  <>
   <main>
    <div className=' w-full mt-2'>

        {/* hero section of home page */}
        <div className=' relative h-80'>
            <div className='w-full h-full'>
                <img className='w-full object-cover h-full ' src="https://www.licious.in/blog/wp-content/uploads/2020/12/3-Step-Chicken-Salad.jpg" alt="" />

                <div className=' absolute bg-black text-white opacity-75 inset-0 flex flex-col items-center justify-center'>
                   <h2 className='text-6xl text-white font-bold animate-pulse sm:px-8'> BE A GOOD CHEF</h2>
                   <div className='w-80 text-center mt-1'>
                    <h3>make your and other's day happy by making & serving delicious Food</h3>
                   </div>
                  
                </div>
            </div>
        </div>

        <div className='w-full flex justify-end px-4 mt-2 '>
           <Link 
           to='createrecipe'
           >
             <button className='bg-green-500 text-white font-bold px-3 py-2 rounded-2xl'>create recipe</button>

            
           </Link>
          
        </div>

        {/* trending items */}

        <div className='w-full px-1 py-2 mt-5 '>
            <h2 className='text-2xl font-bold ml-2 mb-5 text-center'>TRENDING RECIPES</h2>
           <div className='w-full flex flex-wrap gap-5 justify-evenly'>
          
           {data.map((item) => (
            item.id <5 ?
              <div key={item.id}>
                   <TrendingCard
               names={item.strMeal}
               instructions={item.strInstructions}
               image={item.strMealThumb}
               btn ={ true}
               id={item.id}
               item = {item}
              />
              </div>
              :
              ""
           ))}
           </div>
        </div>

        {/* top pick for you */}

        <div className='w-full px-1 py-2 mt-12 '>
            <h2 className='text-2xl font-bold ml-2 mb-5 text-center'>TOP PICKS FOR YOU</h2>
           <div className='w-full flex flex-wrap gap-5'>
           {data2.map((item) => (
              item.id <13 ?
              <div key={item.idMeal}>
                   <ToppickCard
                   id = {item.id}
               names={item.strMeal}
               instructions={item.strInstructions}
               image={item.strMealThumb}
                video={item.strSource}
              />
              </div>
              :
              ""
              
           ))}
           </div>
        </div>

        {/* recipe made my people */}

        <div id='customeRecipe' className='w-full px-1 py-2 mt-5 '>
            <h2 className='text-2xl font-bold ml-2 mb-5'> RECIPES MADE BY PEOPLE'S</h2>
           <div className='w-full flex flex-wrap gap-5 justify-center'>
          
           {recipe.map((item) => (
            
              <div key={item.id}>
                   <TrendingCard
               names={item.strMeal}
               instructions={item.strInstructions}
               id = {item.id}
               item={item}
               image={item.strMealThumb}
               btn ={ true}
              
               
              />
              </div>
              
           ))}
           </div>
        </div>
       
    </div>
   </main>
  </>
  )
}

export default Home
