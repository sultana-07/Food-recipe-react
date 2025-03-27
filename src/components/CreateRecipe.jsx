import React, { useState } from 'react'
import { useProduct } from '../context'
import { useNavigate } from 'react-router';

function CreateRecipe() {
    window.scrollTo(0,0)
    const {addRecipe} = useProduct();
    const navigate = useNavigate();
    
    const [title,setTitle] = useState("");
    const [inst,setInst] = useState("");
    const [msg,setMsg] = useState(false);
    const [count,setCount] = useState(0);
    const [image,setImage] = useState("");
  


    const add = (e) => {
      e.preventDefault();
      if(count < 30){
        setMsg(true);
      }else {
        addRecipe(title,inst,image);
        setCount(0);
        setMsg(false);
        setInst("");
        setTitle("");
        setImage("");
        document.getElementById("form").reset();
        navigate("success")
      }
       
      
    }

    const handleImageChange = (event) => {
         const file = event.target.files[0];
         if(file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setImage(e.target.result);
          };
          reader.readAsDataURL(file);
         }
    }

 

  return (
    <div className='w-full flex justify-center p-3'>
      <form id='form'  onSubmit={add} className='w-[80%] ' >

      <div className=' p-3'>
     <label className='font-bold'>Title : </label>
     <br/>
     <input
     required
      className=' border-1 outline-none'
       type="text" 
       placeholder='Enter recipe name'
       value={title} 
       onChange={(e) => setTitle(e.target.value)}
       />
     <br/>
     <br />
     <label className='font-bold '>Instructions : </label>
     <br/>
     <textarea
     placeholder='Enter recipe details..'
     min={39}
      value={inst} 
      onChange={(e) => {
        setInst(e.target.value);
        setCount(count+1);
      }}
      className=' border-1 overflow-hidden  outline-none w-full p-2 '
       type="textarea" />
     <br />
    

   
     <div className='text-red-500'>
     { msg ? "instruction is too small please explain in details" : ""}
     </div>
     <br />
     <br />
     <label className='font-bold '>Upload image : </label>
     <input  className='  cursor-pointer border-1' type="file" accept='image/*' onChange={handleImageChange} />
    <div className='w-full flex justify-center mt-2'>
   
    <button type='submit' className='px-3 py-2 bg-green-400 text-white font-bold rounded-2xl mt-2   cursor-pointer'>Submit</button>
    
    </div>
     </div>

      </form>
   
    </div>
  )
}

export default CreateRecipe
