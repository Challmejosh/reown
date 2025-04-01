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
        <div className="w-full relative flex flex-col gap-24 ">
            <HomeNav />
            <div className="p-10 flex flex-col gap-10">
                <div className=""></div>
                <Category tab={setTab} />
                { !tab ?
                    <HomeProduct product={product} isPending={isPending} />
                    : <HomeProduct product={filter} isPending={isPending} />
                }
            </div>
        </div>
     );
}
 
export default HomeLayout;