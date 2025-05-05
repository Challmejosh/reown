'use client'
import { useContext, useState } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Link from "next/link";
import {AnimatePresence, motion} from 'framer-motion';
import { AppContext } from "@/components/context";


const ProductPeer = ({ product }) => {
    const { moveToCart, favoriteFn, isPending, cartId, cartExist } = useContext(AppContext);
    const [favoriteMessages, setFavoriteMessages] = useState(null);

    const handleFavorite = (item) => {
        const newFavoriteState = !item.favorite; // Predict the new state before updating
    
        favoriteFn(item); // Update the backend state
    
        if (newFavoriteState) { // Check the predicted state instead of the old state
            setFavoriteMessages(item.id);
    
            setTimeout(() => {
                setFavoriteMessages(null);
            }, 3000);
        }
    };
    
    

    return ( 
        <div className={`w-full p-3 ${isPending && ""}`}>
            <div className={`${product?.length <= 0 && 'h-screen'} grid grid-cols-2 justify-center sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3`}>
                {isPending ? (
                    <>
                        {product?.map((item,index) => (
                            <motion.div 
                                className="bg-white relative flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px]"
                                key={index}
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1,delay: item.id*0.2 }}
                            >
                                {/* Favorite Message */}
                                <AnimatePresence mode="wait">
                                    {favoriteMessages === item.id && (
                                        <motion.div 
                                            className="flex w-fit items-center justify-center rounded-md absolute top-0 bg-white p-3 z-20 shadow-[#F6F7F9] shadow-lg"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                        >
                                            Added to favorite
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Cart Messages */}
                                <AnimatePresence mode="wait">
                                    {cartId === item.id && (
                                        <motion.div 
                                            className="flex w-fit items-center justify-center rounded-md absolute top-0 bg-white p-3 z-20 shadow-[#F6F7F9] shadow-lg"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                        >
                                            Added to cart
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence mode="wait">
                                    {cartExist === item.id && (
                                        <motion.div 
                                            className="flex w-fit items-center justify-center rounded-md absolute top-0 bg-white p-3 z-20 shadow-[#F6F7F9] shadow-lg"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                        >
                                            Already in Cart
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Favorite and Cart Buttons */}
                                <div className="flex items-center justify-end gap-5">
                                    <FaHeart 
                                        onClick={() => handleFavorite(item)} 
                                        className={`${item?.favorite ? "text-red-600" : ""} cursor-pointer`} 
                                    />
                                    <FaPlus onClick={() => moveToCart(item)} className="cursor-pointer" />
                                </div>

                                {/* Product Image and Info */}
                                <div className="flex items-start justify-center flex-col gap-2">
                                    <div className="w-full flex items-center justify-center">
                                        <motion.img 
                                        whileHover={{ scale: 1.1 }}
                                        src={item?.image} alt="" className="w-full h-[120px]" />
                                    </div>
                                    <Link href={`/detail/${item?.id}`} className="flex flex-col items-start">
                                        <p className="text-xs line-clamp-1 font-semibold">{item?.title}</p>
                                        <p className="text-xs ">${item?.price}</p>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </>
                ) : (
                    <>
                        <AnimatePresence>
                            
                        <motion.div className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "
                        initial={{opacity: 0, y: -10}}
                        exit={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, delay: 0.2}}
                        ></motion.div>
                        </AnimatePresence>
                        <AnimatePresence>
                            
                        <motion.div className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "
                        initial={{opacity: 0, y: -10}}
                        exit={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, delay: 0.4}}
                        ></motion.div>
                        </AnimatePresence>
                        <AnimatePresence>
                            
                        <motion.div className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "
                        initial={{opacity: 0, y: -10}}
                        exit={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, delay: 0.6}}
                        ></motion.div>
                        </AnimatePresence>
                        <AnimatePresence>
                            
                        <motion.div className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "
                        initial={{opacity: 0, y: -10}}
                        exit={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, delay: 0.8}}
                        ></motion.div>
                        </AnimatePresence>
                        <AnimatePresence>
                            
                        <motion.div className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "
                        initial={{opacity: 0, y: -10}}
                        exit={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, delay: 1}}
                        ></motion.div>
                        </AnimatePresence>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProductPeer;
