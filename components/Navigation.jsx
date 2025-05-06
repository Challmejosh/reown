'use client'
import Link from "next/link";
import { useContext } from "react";
import { FaHeart, FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { AppContext } from "./context";

const Navigation = () => {
    const {totalCart,totalFavorite} = useContext(AppContext)
    return ( 
        <div className="fixed flex items-center justify-center w-full p-3 text-white md:hidden z-20 bottom-5">
            <div className="flex mx-5 gap-3 w-full items-center rounded-lg z-20 bg-black/90 justify-between px-2 ">
            <Link href='/homepage'>
                <FaHome />
            </Link>
            <Link href='/cart' className="relative p-3">
                <p className="absolute text-purple-200 right-0 top-0">{totalCart}</p>
                <FaShop />
            </Link>
            <Link href='/favorite' className="relative p-3" >
            <p className="absolute text-purple-200 right-0 top-0 ">{totalFavorite}</p>
                <FaHeart />
            </Link>
            </div>
        </div>
     );
}
 
export default Navigation;