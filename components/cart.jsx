'use client'
import { useContext, useState } from "react";
import { AppContext } from "./context";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import Paystack from "./paystack";
import { motion } from "framer-motion";

const Cart = ({session}) => {
    const {cart,totalPrice,delItem,setCart,addQuantity,removeQuantity} = useContext(AppContext)
    const [show, setShow] = useState(false)
    return ( 
        <div className=" relative h-full p-3 flex flex-col items-center justify-center ">
            {show && <Paystack email={session?.user?.email} amount={totalPrice} show={setShow} /> }
            {cart.length <= 0 ? (
                <motion.div className="h-[500px] flex items-center justify-center "
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                >
                    <h1 className="text-3xl text-center text-gray-600">Your cart is empty</h1>
                </motion.div>
            ):(
                <div className="flex p-3 flex-col gap-3 ">
                    {cart.map(item=>(
                        <motion.div className="flex justify-between gap-3 rounded-lg overflow-hidden shadow bg-white  " key={item.id}
                        initial={{opacity:0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5,delay: item.id * 0.1}}
                        >
                            <img src={item?.category?.image} alt="" className="w-[80px] max-w-[130px] " />
                            <div className="p-1">
                                <p className="font-semibold">{item?.title}</p>
                                <div className="">
                                    <div className="flex gap-5">
                                        <p className="font-semibold">${item?.price}</p>
                                        <p className="">{item?.quantity}</p>
                                    </div>
                                    <div className="flex gap-5">
                                        <FaMinus onClick={()=>removeQuantity(item)} className="font-semibold cursor-pointer" />
                                        <FaPlus onClick={()=>addQuantity(item)} className="font-semibold cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center p-1 justify-center ">
                                <FaTimes size={24} onClick={()=>delItem(item,cart,setCart)} className="cursor-pointer" />
                            </div>
                        </motion.div>
                    ))}
                    <motion.div className="flex items-center justify-between"
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    >
                        <p className="font-semibold">Total</p>
                        <p className="font-semibold">${totalPrice}</p>
                    </motion.div>
                    <motion.div onClick={()=>setShow(true)} className="flex bg-purple-400 p-3 rounded-lg text-white items-center justify-center cursor-pointer "
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    >
                        make your purchase
                    </motion.div>
                </div>
            )}
            
        </div>
     );
}
 
export default Cart;