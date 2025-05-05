'use client'
import { AppContext } from "@/components/context";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
const CreateProduct = ({submit}) => {
    const {cancelForm} = useContext(AppContext)
    const [title,setName] = useState('')
    const [amount,setAmount] = useState('')
    const [quantity,setQuantity] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState(null)
    const handleImage = async (e)=>{
        const file = e.target.files[0]
            if(!file){
                return
            }
        if(file){
            if (!file.type.startsWith('image/')){
                setImage(null)
                return
            }
            if(file.size > 500 * 1024){
                setImage(null)
                return
            }
            const cloudName = "dbdwpzcdz"
            const presetName ="Reown-store"
            const data = new FormData()
            data.append('file', file)
            data.append('upload_preset',presetName)
            data.append('cloud_name',cloudName)
            const uploadImage = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,{
                method: "POST",
                body: data
            })
            console.log(uploadImage)
            const imageObj = await uploadImage.json()
            const imageUrl = imageObj.url
            setImage(imageUrl)
        }
    }
    const key=2
    return ( 
        <AnimatePresence key={key} mode='wait'>
            <motion.form onSubmit={(e)=>submit(e,title,amount,quantity,description,image)} className=" flex top-5 absolute sm:w-[400px] flex-col gap-3 items-start justify-center p-3 bg-white rounded-sm "
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale:0,transition: {duration: 3,delay:7}}}
            transition={{duration:1}}
            >
                <div className="w-full flex items-center justify-end ">
                    <FaTimes className="cursor-pointer" size={34} onClick={cancelForm} />
                </div>
                <div className="flex flex-col items-center justify-center gap-3 w-full ">
                    <Image src={image ? image : '/file.svg' } alt="" width={100} height={100} className="flex border-[3px] object-cover w-[200px] h-[100px] border-[#F6F7F9] " />
                    <label className="cursor-pointer" htmlFor="image">Upload Image</label>
                </div>
                <input required id="image" type="file" hidden accept='image/*' onChange={(e)=>handleImage(e)} className="" />
                <input required type="text" value={title} onChange={(e)=>setName(e.target.value)} placeholder="item title..." className="w-full rounded-md py-2 px-3 bg-slate-50 " />
                <input required type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="description" className="w-full rounded-md py-2 px-3 bg-slate-50" />
                <input required type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Amount" inputMode="numeric" className="w-full rounded-md py-2 px-3 bg-slate-50" />
                <input required type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder="quantity" inputMode="numeric" className="w-full rounded-md py-2 px-3 bg-slate-50" />
                <button type="submit" className="w-full cursor-pointer px-3 py-2 rounded-md hover:bg-purple-400 hover:text-purple-600 bg-purple-600 text-white  " >add product</button>
            </motion.form>
        </AnimatePresence>
     );
}
 
export default CreateProduct;