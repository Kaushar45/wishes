import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const HomePage = () => {
  const [inputValue,setInputValue]=useState("")
 const navigate=useNavigate()
  function handleForm(e){
e.preventDefault()
navigate(`/${inputValue.toLocaleLowerCase}`)
setInputValue(e.target.value)
  }

  return (
 <>
 <section className='flex items-center justify-center flex-col min-h-screen'>
  <h3>click on Image</h3>
  <img className='h-72 w-72 object-contain'
  src='https://editzstock.com/wp-content/uploads/2022/09/Durga-puja-mata-pngdurga-puja-maa-durga-png.png'
  onClick={()=>{
    navigate("kushar")
  }}
  />
 </section>
 <form onSubmit={handleForm}
 className='flex justify-center items-center   bottom-10    border-black gap-5'>
  <input required 
  name='msg' 
   placeholder='Enter Your Name' 
   onChange={(e)=>{
    setInputValue(e.target.value)
  }} 
  className='px-2 py-1  outline-none border border-gray-400 focus:border-gray-900 rounded'/>
   <button type='submit'
   disabled={!inputValue ?true:false }
   className={`py-1.5 px-5  border border-gray rounded ${inputValue.length<2?"bg-gray-300 text-gray-400 cursor-not-allowed":"bg-red-400 text-white cursor-pointer"}`}
        
        >wish</button>
      </form>
       
    
 </>
  )
}

export default HomePage
