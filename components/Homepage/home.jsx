'use client'
import { useContext, useState } from "react";
import HomeNav from "../homenav";
import HomeProduct from "../homeProduct";
import Category from "./category";
import { AppContext } from "../context";



const HomeLayout = () => {
    const {product,isPending} = useContext(AppContext)
    const [tab,setTab] = useState('')
    const filter = product?.filter((item) => item?.category?.name.toLowerCase() === tab.toLowerCase())
    return ( 
        <div className="w-full relative flex flex-col ">
            <HomeNav />
            <div className="p-10 flex flex-col gap-10">
                {/* <div className=""></div> */}
                <Category tab={setTab} />

                { !tab ?
                <>
                    <h1 className="font-semibold text-lg leading-[34px] " >Clothes</h1>
                    <HomeProduct product={product.filter(item => item?.category?.name === 'Clothes')} isPending={isPending} />
                    <h1 className="font-semibold text-lg leading-[34px] " >Electronics</h1>
                    <HomeProduct product={product.filter(item => item?.category?.name === 'Electronics')} isPending={isPending} />
                    <h1 className="font-semibold text-lg leading-[34px] " >Furnitures</h1>
                    <HomeProduct product={product.filter(item => item?.category?.name === 'Furniture')} isPending={isPending} />
                    <h1 className="font-semibold text-lg leading-[34px] " >Shoes</h1>
                    <HomeProduct product={product.filter(item => item?.category?.name === 'Shoes')} isPending={isPending} />
                    <h1 className="font-semibold text-lg leading-[34px] " >Miscellaneous</h1>
                    <HomeProduct product={product.filter(item => item?.category?.name === 'Miscellaneous')} isPending={isPending} />
                </>
                    : 
                    <>
                    <h1 className="font-semibold text-lg"> Best of {tab} </h1>
                    <HomeProduct product={filter} isPending={isPending} />
                    </>
                }
            </div>
        </div>
     );
}
 
export default HomeLayout;