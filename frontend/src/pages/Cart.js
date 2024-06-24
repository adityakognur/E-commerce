import React ,{useState,useEffect, useContext} from 'react'
import SummaryApi from '../common'
import Context from '../context'
const Cart = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const context = useContext(Context)
    const loadingCart = new Array(context.cartProductCount).fill(null)

    const fetchData = async() =>{
        setLoading(true)
        const response = await fetch(SummaryApi.addToCartProductView.url,{
            method : SummaryApi.addToCartProductView.method,
            credentials : 'include',
            headers : {
                "content-type" : 'application/json'
            },
        })
        setLoading(false)
        const responseData = await response.json()

        if(responseData.success){
            setData(responseData.data)
        }
       
    }

    useEffect(()=>{
        fetchData()
    },[])


  return (
    <div className='container mx-auto  '>
      <div className='text-center text-lg my-6'>
      {
        data.length === 0 && !loading &&(
        <p className='bg-white py-5'>No dats</p>
    )
}
      </div>
      <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
        {/***view product */}
        <div className=' w-full max-w-3xl '>
            {
                loading ? (
                    loadingCart.map(el=>{
                        return(
                            <div key={el+"Add To Cart Loading"} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>
                        
                             </div>
                        )
                    })
                   

                ) :(
                    data.map((product,index)=>{
                        return(
                            <div key={product?._id+"Add To Cart Loading"} className='w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]'>
                        <div className='w-32 h-32 bg-slate-200'>
                            <img src={product?.productId?.productImage[0]} classname="w-full h-full object-scale-down mix-blend-multiply"/>

                        </div>
                        <div className='p-4'>
                           
                         <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.productId?.productName}</h2>
                        <p className='capitalize text-slate-500'>{product?.productId.category}</p>
                        <div>
                            <button className=' border-red-500 text-red-600 w-6 h-6 flex justify-center items-center '>- </button>
                            <span>{product?.quantity}</span>
                            <button className=' border-red-500 text-red-600 w-6 h-6 flex justify-center items-center'>+</button>
                        </div>
                        </div>
                            </div>
                        )
                    })
                )
            }
        </div>
{/*** summaryt */}

            <div className='mt-5 lg:mt-0 w-full max-w-sm'>
    {
    loading ? (
        <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'>

      </div>
    ) : (
        <div className='h-36 bg-slate-200'>

      </div>
    )
}
            </div>

      </div>
    </div>
  )
}

export default Cart