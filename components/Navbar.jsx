'use client'
import Link from "next/link";
import SearchBar from "./searchbar";
import { HiShoppingCart } from "react-icons/hi";
import { useContext } from "react";
import { AppContext } from "./context";
import { motion } from "framer-motion";

const Navbar = ({session}) => {
    const {totalCart} = useContext(AppContext)
    return ( 
        <motion.div className="hidden p-3 md:flex items-center justify-between w-full gap-3 "
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{duration: 0.2}}
        >
            <div className="text-5xl">
                <p className="font-semibold">Re<span className="text-yellow-700">o</span>wn</p>
            </div>
            <SearchBar />
            <div className="flex items-center justify-center gap-5">
                <Link href='/homepage' className="">
                    Home
                </Link>
                <Link href='/cart' className="p-3 relative">
                    <HiShoppingCart size={24} />
                    <p className="absolute top-0 right-2  text-purple-200">{totalCart}</p>
                </Link>
                <Link href='/favorite' className="">
                    Favorites
                </Link>
            </div>
            <div className="flex ">
                <img src={session?.user?.image} alt="" className="flex w-[80px] h-[50px] object-cover rounded-full" />
            </div>
        </motion.div>
     );
}
 
export default Navbar;