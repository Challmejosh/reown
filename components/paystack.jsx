'use client'
import { useRouter } from "next/navigation"
import { FaTimes } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react"
import { AppContext } from "./context"
import { PaystackButton } from "react-paystack"

const Paystack = ({email,amount,show}) => {
    const {setCart} = useContext(AppContext)
    const router = useRouter()
    const submit = ()=>{
        router.push('/homepage')
        setCart([])
    }
        const success = ()=>{
            submit()
        }
        const cancel = ()=>{
            submit()
        }
        const error = ()=>{
            submit()
        }
        const value = {
            email: email,
            amount: amount * 100,
            publicKey: 'pk_test_ee35b8f44c715c5fffad4db74ae73ebf2c8cd566',
             ref: "unique-transaction-ref-" + new Date().getTime(),
            currency: "NGN",
            text: "confirm",
            onSuccess:()=> success(),
            onClose: ()=> cancel(),
            onError: ()=> error() 
        }
        const dollarAmount = `NGN ${amount}`
    return ( 
        <AnimatePresence mode="wait">
            <motion.div className="bg-white shadow-lg z-10 fixed top-5 rounded-2xl w-full p-5 sm:w-[400px] md:w-[600px] "
            initial={{opacity:0,y: '-100vw'}}
            animate={{opacity: 1,y:0 }}
            transition={{duration: 1}}
            exit={{opacity: 0,y: '-100vw'}}
            >
                <div className="flex items-center justify-end ">
                    <FaTimes onClick={()=>show(false)} className="cursor-pointer" />
                </div>
                <form onSubmit={(e)=>{
                    // alert('pay')
                    e.preventDefault()
                    }} className="flex flex-col gap-5 items-start justify-center" action="">
                    <div className=" flex flex-col items-center justify-center w-full text-center">
                        <p className="">Make a purchase for your goods</p>
                        <p className="">Confirm the amount and email before proceeding</p>
                    </div>
                    <label htmlFor="email">Email</label>
                    <input id='email' placeholder=""  className='bg-blue-50 focus:outline-none w-full text-black/80 shadow-inner p-3 rounded-lg font-semibold ' type="text" name="email" value={email} />
                    <label htmlFor="amount">Amount</label>
                    <input id='amount' placeholder="" className='bg-blue-50 focus:outline-none w-full text-black/80 shadow-inner p-3 rounded-lg font-semibold ' type="text" name="amount" value={dollarAmount} />
                    {email && amount && (
                        <div className="flex items-center justify-end w-full ">
                            <PaystackButton className="bg-purple-400 cursor-pointer py-2 px-5 rounded-lg text-white p-3 " {...value} /> 
                        </div>)
                    }
                </form>
            </motion.div>
        </AnimatePresence>
     );
}
 
export default Paystack;