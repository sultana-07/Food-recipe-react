import React, { useState,useEffect } from 'react'
import {useParams,Link} from 'react-router'
import TrendingCard from './TrendingCard';
import { useProduct } from '../context';
function SingleProduct() {

    const {id} = useParams();
    const page =( Math.random()*20);
    const [isClick,setIsClick] = useState(false)
    

    const {addToCart,deleteCart} =  useProduct();

    const [data,setdata] = useState([])
    const [data2,setdata2] = useState([])
   

   
      useEffect(() => {
         if(id < 300){
          fetch(`https://api.freeapi.app/api/v1/public/meals/${id}`)
          .then(res => res.json())
          .then(res => setdata(res.data));
   
          fetch(`https://api.freeapi.app/api/v1/public/meals?page=${page}&limit=8`)
          .then(res => res.json())
          .then(res => setdata2(res.data.data));
         }else{
          const recipes = JSON.parse(localStorage.getItem("recipes"));
         const temp =  (recipes.filter(item => item.id == id))
         setdata(temp[0])
            

          fetch(`https://api.freeapi.app/api/v1/public/meals?page=${page}&limit=8`)
          .then(res => res.json())
          .then(res => setdata2(res.data.data));
         }
      

        window.scrollTo(0,0)
     },[id])

     const add = () => {
      if(isClick){
        deleteCart(data.id)
        setIsClick(false)
      }else{
        addToCart(data)
        setIsClick(true)
      }
           
     }

      
       
  return (
    <>
    <div className='w-full lg:flex gap-2 p-2'>
       <div className='w-full lg:w-1/2  h-fitp-2'>
              <div className='w-full md:h-70  h-50 flex justify-center'>
                <img className=' w-full object-cover' src={data.strMealThumb ? data.strMealThumb :"https://icrier.org/wp-content/uploads/2022/12/media-Event-Image-Not-Found.jpg"  }alt="" />
              </div>

            <div className='w-full  '>
            <h1 className='text-3xl font-extrabold mt-2'>{data.strMeal}</h1>
           <div className='w-full flex justify-between mt-4  px-2'>
           <button onClick={add} className="cursor-pointer bg-black text-white px-3 mt-4 py-2 rounded-2xl text-sm">{isClick ? "success" : "Add cart"}</button>

           {data.strYoutube ? <Link to={data.strYoutube} className="cursor-pointer bg-red-600 text-white px-3 mt-4 py-2 rounded-2xl text-sm">
               watch video
              </Link> : ""}
           </div>
            </div>

             <div className='w-full flex mt-7'>
                     
               <div className='w-1/2'>
                  <h2 className='text-xl text-center font-bold'>INGRIDIANT</h2>
                  <ul className=' gap-1 mt-2'>
                    <li>{data.strIngredient1}</li>
                    <li>{data.strIngredient2}</li>
                    <li>{data.strIngredient3}</li>
                    <li>{data.strIngredient4}</li>
                    <li>{data.strIngredient5}</li>
                    <li>{data.strIngredient6}</li>
                    <li>{data.strIngredient7}</li>
                    <li>{data.strIngredient8}</li>
                    <li>{data.strIngredient9}</li>
                    <li>{data.strIngredient10}</li>
                    <li>{data.strIngredient11}</li>
                    <li>{data.strIngredient12}</li>
                    <li>{data.strIngredient13}</li>
                    <li>{data.strIngredient14}</li>
                    <li>{data.strIngredient15}</li>
                    <li>{data.strIngredient16}</li>
                    <li>{data.strIngredient17}</li>
                    <li>{data.strIngredient18}</li>
                    <li>{data.strIngredient19}</li>
                    <li>{data.strIngredient20}</li>
                  </ul>
              </div>

              <div className='w-1/2 '>
                   <h2 className='text-xl text-center font-bold'>QUANTITY</h2>
                   <ul className='gap-1 mt-2'>
                    <li>{data.strMeasure1}</li>
                    <li>{data.strMeasure2}</li>
                    <li>{data.strMeasure3}</li>
                    <li>{data.strMeasure4}</li>
                    <li>{data.strMeasure5}</li>
                    <li>{data.strMeasure6}</li>
                    <li>{data.strMeasure7}</li>
                    <li>{data.strMeasure8}</li>
                    <li>{data.strMeasure9}</li>
                    <li>{data.strMeasure10}</li>
                    <li>{data.strMeasure11}</li>
                    <li>{data.strMeasure12}</li>
                    <li>{data.strMeasure13}</li>
                    <li>{data.strMeasure14}</li>
                    <li>{data.strMeasure15}</li>
                    <li>{data.strMeasure16}</li>
                    <li>{data.strMeasure17}</li>
                    <li>{data.strMeasure18}</li>
                    <li>{data.strMeasure19}</li>
                    <li>{data.strMeasure20}</li>
                   </ul>
              </div>
             </div>
       </div>

       <div className='w-full p-2 '>
            
              <h3 className='text-2xl font-bold mt-8'>INSTRUCTIONS</h3>
              <p className='mt-2 mb-3'>{data.strInstructions}</p>
              <h2 className=' text-2xl font-bold text-center mt-2 mb-6 '> Thank you</h2>
             
       </div>
    </div>

    {/* recomemdent */}

    <div className='w-full px-1 py-2 mt-5 '>
            <h2 className='text-2xl font-bold ml-2 mb-5'>YOU ALSO LIKE</h2>
           <div className='w-full flex flex-wrap gap-5 justify-center'>
          
           {data2.map((item) => (
           
              <div key={item.id}>
                   <TrendingCard
               names={item.strMeal}
               instructions={item.strInstructions}
               image={item.strMealThumb}
               btn ={ true}
               id={item.id}
               item={item}
              />
              </div>
              
           ))}
           </div>
        </div>
    </>
  )
}

export default SingleProduct
