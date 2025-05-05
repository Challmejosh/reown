'use client'

import { AppContext } from "@/components/context";
import { useContext } from "react";
import CreateProduct from "./createproduct";
import { AnimatePresence,motion } from "framer-motion";
import ProductPeer from "./peerProduct";
import Link from "next/link";

const Market = ({posts,submit,seller}) => {
    const {marketTab,showCreateProduct,buyProduct,sellProduct} = useContext(AppContext)
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
                                        <p className="text-xs ">${item?.amount}</p>
                                    </div>
                                    <div className="flex w-full items-center gap-5 justify-between ">
                                        <Link href={`/p2p/product/${item?.title}`} className="w-full bg-purple-400 ">View</Link>
                                        <div className="w-full bg-purple-400 ">Buy</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </>
                    {/* <Products product={buyProduct} /> */}
                </div>
            )}
            {marketTab === 'Sell' && (
                // <div className={`${seller.length >= 1 && 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'} w-full flex flex-col items-center justify-center `}>                
                    <ProductPeer product={seller} />
                // </div>
            )}
            {showCreateProduct && marketTab === 'Sell' && (
                <CreateProduct submit={submit} />
            )}
        </div>
     );
}
 
export default Market;