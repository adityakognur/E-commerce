import React from 'react'
import  { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link ,useNavigate} from 'react-router-dom';
import loginIcons from '../assest/signin.gif'
import  imageTobase64  from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
const SignUp = () => {
    const[showPassword,setShowPassword]=useState(false)
    const[showConfirmPassword,setShowConfirmPassword]=useState(false)
  const[data,setData]=useState({
    email : "",
    password : "",
    name :"",
    confirmPassword:"",
    image : "",
  })

  const navigate = useNavigate()

  const handleOnChange =(e) =>{
    const{ name, value}=e.target
    
    setData((preve)=>{
      return {
        ...preve,
        [name] : value
      }
    })
  }
  
  const handleSubmit = async(e) =>{
    e.preventDefault()

    if(data.password !== data.confirmpassword){

      const dataResponse = await fetch(SummaryApi.signUP.url,{
          method : SummaryApi.signUP.method,
          headers : {
              "content-type" : "application/json"
          },
          body : JSON.stringify(data)
         })
  
        const dataApi = await dataResponse.json()
        if(dataApi.success)
             {
              toast.success(dataApi.message)
              navigate("/login")
             }   
             if(dataApi.error)
              {
               toast.error(dataApi.message)
              } 
    }else{
      toast.error("Please check password and confirm password")
     
    }
  }
  
 const handleUploadprofileImage=async(e)=>{
  const file = e.target.files[0]
    const imagePic=await imageTobase64(file)
   
    console.log(data)

    setData((preve)=>{
      return{
        ...preve,
        image:imagePic
      }
    })
  }
 
  return (
    <section id='signup'>
<div className='mx-auto container p-12'>


<div className='bg-white p-5 w-full max-w-sm mx-auto '>
<div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
    <div>
    <img src={data.image||loginIcons} alt='login icons'/>
    </div>
    <form>
    <label>
    <div className='text-xs.bg-opacity-80 bg-slate-100  pb-1 pt-1 cursor-pointer text-center absolute bottom-0 w-full'>
        Upload Photo
        
    </div>
    <input type='file' className='hidden' onChange={handleUploadprofileImage}/>
    </label>
    </form>
</div>

<form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
    <div className='grid'>
      <label>Name :</label>
      <div className='bg-slate-100 p-2 '>
      <input 
      type='text' 
      
      placeholder='Enter name'
      name='name'
      value={data.name}
      onChange={handleOnChange}
      required
       className=' outline-none bg-transparent'/>
      </div>
    </div>
    <div className='grid'>
      <label>Email :</label>
      <div className='bg-slate-100 p-2 '>
      <input 
      type='email' 
      
      placeholder='Enter Email'
      name='email'
      value={data.email}
      onChange={handleOnChange}
      required
       className=' outline-none bg-transparent'/>
      </div>
    </div>
    <div>
  <label>Password :</label>
  <div className='bg-slate-100 p-2 flex'>
  <input
   type={showPassword ? "text": "password"} 
   placeholder='Enter Password'
   name='password'
   value={data.password}
      onChange={handleOnChange}
      required
      className='w-full h-full outline-none bg-transparent'/>
  <div className='cursor-pointer text-xl 'onClick={()=>setShowPassword((preve)=>!preve)}>
    <span>
      {
        showPassword ? (
          <FaEyeSlash/>
        )
        :
        (
          <FaEye/>
        )

      }
     </span>
  </div>
  </div>
     <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-500'>
    Forgot password?
     </Link>
</div>
<div>
  <label>Confirm Password :</label>
  <div className='bg-slate-100 p-2 flex'>
  <input
   type={showConfirmPassword ? "text": "password"} 
   placeholder='Enter Confirm Password'
   name='ConfirmPassword'
   value={data.confirmpassword}
      onChange={handleOnChange}
      required
      className='w-full h-full outline-none bg-transparent'/>
  <div className='cursor-pointer text-xl 'onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
    <span>
      {
        showConfirmPassword ? (
          <FaEyeSlash/>
        )
        :
        (
          <FaEye/>
        )

      }
     </span>
  </div>
  </div>
    
</div>
<button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>SignUp</button>
</form>
      <p className='my-5'>Already have account?<Link to={"/login"} className='text-red-600 hover:text-red-700 hover:underline'>LOGIN</Link></p>
</div>
</div>
   </section>
  )
}

export default SignUp