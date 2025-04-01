'use client'
import Cart from "@/components/cart";
import { AppContext } from "@/components/context";
import { use, useContext, useEffect, useState } from "react";

const Page = ({params}) => {
        const {id} = use(params)
       const [isPending,setIsPending] = useState(false)
        const [product,setProduct] = useState([])
        useEffect(()=>{
            try {
                fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
                .then(res => res.json())
                .then((data)=>{
                    setProduct(data)
                    setIsPending(true)
                })
                .catch((error)=>{
                    throw error
                })
                
            } catch (error) {
                console.log(error)
            }
        },[product])
    const {moveToCart} = useContext(AppContext)
    const [image,setImage] = useState('')
    const changeImg = (url)=>{
        setImage(url)
    }
    return ( 
        <div className="grid sm:grid-cols-5 items-center justify-center w-full mx-20 gap-2">
            {isPending?(
                <div className="sm:col-span-3 w-full flex flex-col p-3 mx-10 gap-5 items-start justify-center ">
                    <div className="flex flex-col sm:flex-row gap-5 items-start justify-center">
                        <img src={image?image:product?.category?.image} alt="" className=" w-[250px] max-w-4xl  " />
                        <div className="leading-[35px] flex flex-col gap-5 items-start h-full justify-between ">
                            <>
                                <div className="border-b">
                                    <p className="font-semibold text-lg md:text-2xl xl:text-3xl ">{product?.title}</p>
                                    <p className="">category: {product?.category?.slug} </p>
                                </div>
                                <div className="">
                                    <p className="text-lg">${product?.price}</p>
                                </div>
                            </>
                            <div className="flex gap-2">

                                <img onClick={()=>changeImg(product?.category?.image)} src={product?.category?.image} alt="" className={` ${image === product?.category?.image && "border-yellow-600 border "  } w-[50px] h-[50px] object-cover cursor-pointer `} />
                                {product?.images?.map((item,index)=>(
                                    <div key={index}>
                                        <img onClick={()=>changeImg(item)} src={item} alt="" className={` ${image === item && "border-yellow-600 border" } w-[50px] h-[50px] object-cover cursor-pointer `} />
                                    </div>
                                ))}
                            </div>
                            <div onClick={()=>moveToCart(product)} className="text-white bg-purple-400 cursor-pointer rounded-lg flex w-full items-center justify-center shadow   ">Add to Cart</div>
                        </div>
                    </div>
                    <div className="">
                        <p className="font-semibold text-lg ">Description</p>
                        <p className="">{product?.description}</p>
                    </div>
                </div>
            ):(
                <div className="col-span-5 flex flex-col h-screen mx-10 gap-5 items-center justify-center ">
                    <div className="loader"></div>
                </div>
            )}
            {isPending ? (
                <div className="col-span-2">
                    <Cart />
                </div>
            ): null }
        </div>
     );
}
 
export default Page;