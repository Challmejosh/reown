'use client'

import { useContext, useState } from "react";
import { FaClock, FaFilter } from "react-icons/fa";
import Products from "./Products";
import { AppContext } from "./context";
import { FaBolt } from "react-icons/fa6";
import { AnimatePresence,motion } from "framer-motion";

const OverAll = () => {
    const [section,setSection] = useState('Trending')
    const {product,isPending} = useContext(AppContext)
    const sectionFn = (sect)=>{
        setSection(sect)
    }
    const filter = product.filter(item => item?.price > 800)
    return ( 
        <div className="flex  flex-col ">
            <div className="flex justify-between bg-white w-full ">
                <p onClick={()=>{
                    setSection('Trending')
                }} className={`${section === 'Trending'?'bg-purple-200 rounded-tr-2xl':"bg-white"} flex w-1/2 cursor-pointer px-5 py-3 gap-2 items-center justify-center `}>
                    <FaClock />
                    <span className="text-xs">
                    Trending Now
                    </span>
                </p>
                <p onClick={()=>{sectionFn('Deals')}} className={`${section === 'Deals'?'bg-purple-200 rounded-tl-2xl ':"bg-white  "}   flex w-1/2 cursor-pointer px-5 py-3 gap-2 items-center justify-center`}>
                    <FaBolt  />
                    <span className="text-xs">
                    Deals
                    </span>
                </p>
            </div>
            <div className="p-2 " >
                <AnimatePresence mode='wait'>
                    {section==='Trending'&&(
                        <motion.div className="flex flex-col gap-3 mx-3 "
                        initial={{y: 200,opacity: 0}}
                        exit={{y: 200,opacity: 0}}
                        animate={{y: 0,opacity: 1}}
                        transition={{duration: 0.5}}
                        >
                            <div className="flex items-center justify-between ">
                                <p className="text-2xl sm:text-4xl font-semibold">Save up to <span className="text-yellow-700" >70%</span></p>
                                <div className="bg-slate-100 cursor-pointer rounded-full flex p-2 items-center justify-center w-[50px] h-[50px] ">
                                    <FaFilter size={24} />
                                </div>
                            </div>
                            <Products product={filter} isPending={isPending} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence mode='wait'>
                    {section ==='Deals'&&(
                        <motion.div className="flex flex-col gap-3 mx-3"
                        initial={{y: 200,opacity: 0}}
                        animate={{y: 0,opacity: 1}}
                        transition={{duration: 1}}
                        exit={{y: 200,opacity: 0}}
                        >
                            <div className="flex items-center justify-between ">
                                <p className="text-2xl sm:text-4xl font-semibold">Products under <span className="text-yellow-700" >$800</span></p>
                                <div className="bg-slate-100 cursor-pointer rounded-full flex p-2 items-center justify-center w-[50px] h-[50px] ">
                                    <FaFilter size={24} />
                                </div>
                            </div>
                            <div className="">
                                <Products product={product.filter(item => item?.price < 800)} isPending={isPending} />
                            </div>
                        </motion.div>
                    ) }
                </AnimatePresence>
            </div>
        </div>
     );
}
 
export default OverAll;