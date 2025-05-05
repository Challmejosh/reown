'use client'

import { AppContext } from "@/components/context";
import { useContext } from "react";

const Nav = () => {
    const {marketTab,handleMarketTab,handleCreateProduct} = useContext(AppContext)
    return ( 
        <div className="flex p-5 w-full items-center justify-between ">
            <div className="p-1 w-[150px] flex items-center justify-center gap-1 rounded-md bg-slate-50 shadow-inner ">
                <div onClick={()=>handleMarketTab('Buy')} className={`flex p-2 cursor-pointer items-center justify-center text-center w-full ${marketTab === 'Buy' && `bg-slate-400 text-white rounded-md text-center`}`}>
                    <p className="">Buy</p>
                </div>
                <div onClick={()=>handleMarketTab('Sell')} className={`flex p-2 cursor-pointer items-center justify-center text-center w-full ${marketTab === 'Sell' && `bg-slate-400 text-white rounded-md text-center`}`}>
                    <p className="">Sell</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 ">
                <p className="">History</p>
                {marketTab === 'Sell' && 
                <div onClick={handleCreateProduct} className="cursor-pointer">create</div>
                }
            </div>
        </div>
     );
}
 
export default Nav;