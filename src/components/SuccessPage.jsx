import React from 'react'
import { useNavigate} from 'react-router'

function SuccessPage() {
    const navigate = useNavigate();

    const handle = () => {
        navigate("/")
    }
  return (
    <>
    <div className=' w-full h-screen flex justify-center '>
       <div className=' w-[70%] h-40 mt-7 flex flex-col justify-center text-center'>
       <h2 className='text-2xl'> Congratulation you recipe is submitted successfully</h2>
       <p>you can see your recipe in the Home page section  
      
        <span className='text-blue-400 cursor-pointer' onClick={handle}> recipe made by people's</span>
       </p>
       </div>

    </div>
    </>
  )
}

export default SuccessPage
