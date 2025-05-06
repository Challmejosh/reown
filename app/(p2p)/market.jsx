'use client'

import { AppContext } from "@/components/context";
import { useContext, useState } from "react";
import CreateProduct from "./createproduct";
import { AnimatePresence,motion } from "framer-motion";
import ProductPeer from "./peerProduct";
import Link from "next/link";
import PeerPaystack from "./paystack";

const Market = ({posts,seller,email}) => {
    const {marketTab,showCreateProduct,buyProduct,sellProduct} = useContext(AppContext)
    const [show,setShow] = useState(false)
    const [amt,setAmt] = useState(null)
    return ( 
        <div className="flex w-full p-5 items-start gap-5 justify-center ">
            {marketTab === 'Buy' && (
                <div className={`${buyProduct.length >= 1 && 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'} w-full flex items-start justify-center `}>
                    {posts.length <= 0 && (
                      <div className="w-full flex items-center justify-center " >
                        Empty Page
                      </div>  
                    )}
                    <>
                        {posts.length >= 1 && posts?.map((item,index) => (
                            <motion.div 
                                className="bg-slate-50 relative flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px]"
                                key={index}
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1,delay: index * 0.2}}
                            >
                                {/* Product Image and Info */}
                                <div className="flex items-start justify-center flex-col gap-2">
                                    <div className="w-full flex items-center justify-center">
                                        <motion.img 
                                        whileHover={{ scale: 1.1, backgroundSize: 'cover' }}
                                        src={item?.image} alt="" className="w-full cursor-pointer mix-blend-multiply h-[120px]" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-xs line-clamp-1 font-semibold">{item?.title}</p>
                                        <p className="text-xs line-clamp-2 font-semibold">{item?.description}</p>
                                        <p className="text-xs ">${item?.amount}</p>
                                    </div>
                                    <div className="flex w-full items-center gap-5 justify-end ">
                                        {/* <div className="w-full rounded-md flex items-center justify-center text-white text-center bg-purple-400 ">View</div> */}
                                        <div onClick={()=>{
                                            setShow(true)
                                            setAmt(item?.amount)
                                        }} className="w-full cursor-pointer rounded-md flex items-center justify-center text-white text-center bg-purple-400 ">Buy</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </>
                </div>
            )}
            {marketTab === 'Sell' && (
                // <div className={`${seller.length >= 1 && 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'} w-full flex flex-col items-center justify-center `}>                
                    <ProductPeer product={seller} />
                // </div>
            )}
            {showCreateProduct && marketTab === 'Sell' && (
                <CreateProduct />
            )}
            {show && (
                <PeerPaystack show={show} amount={amt} email={email} setShow={setShow} />
            ) }
        </div>
     );
}
 
export default Market;