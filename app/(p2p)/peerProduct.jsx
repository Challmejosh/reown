'use client'
import {AnimatePresence, motion} from 'framer-motion';
import Link from 'next/link';

const ProductPeer = ({ product }) => {    
    return ( 
        <div className={`w-full p-3`}>
            <div className={`${product?.length <= 0 && 'h-screen'} grid grid-cols-2 justify-center sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3`}>
                {product?.length >= 1 ? (
                    <>
                        {product?.map((item,index) => (
                            <motion.div 
                                className="bg-white relative flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px]"
                                key={index}
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1,delay: item.id*0.2 }}
                            >
                                {/* Product Image and Info */}
                                <div className="flex items-start justify-center flex-col gap-2">
                                    <div className="w-full flex items-center justify-center">
                                        <motion.img 
                                        whileHover={{ scale: 1.1 }}
                                        src={item?.image} alt="" className="w-full h-[120px]" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-xs line-clamp-1 font-semibold">{item?.title}</p>
                                        <p className="text-xs line-clamp-2 font-semibold">{item?.description}</p>
                                        <p className="text-xs ">NGN {item?.amount}</p>
                                    </div>
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
