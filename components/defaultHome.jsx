'use client'
import { FaHeart, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperSlide,Swiper } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

const DefaultHome = ({product,isPending}) => {

    return ( 
        <Swiper 
        modules={[Navigation,Pagination]} spaceBetween={30} slidesPerView={5} pagination={{clickable:true}} 
        className={`${product.length <= 4 && 'h-srceen' } w-full `}>
        {isPending ? (
        <>
        {product?.map(item=>(
            <SwiperSlide className={` bg-white flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px]`}key={item?.id}>
                <div className="flex items-center justify-end gap-5 ">
                    <FaHeart onClick={alert("sign in")} className={`${item?.favorite ? "text-red-600" : ""} cursor-pointer`} />
                    <FaPlus onClick={alert('sign in')} className="cursor-pointer" />
                </div>
                <div className="flex items-start justify-center flex-col gap-2 ">
                    <div className="w-full flex items-center justify-center ">
                        <motion.img 
                        whileHover={{scale:1.1}}
                        src={item?.category?.image} alt="" className="w-full h-[120px] " />
                    </div>
                    <div className="flex flex-col items-start ">
                        <p className="text-xs line-clamp-1 font-semibold">{item?.title}</p>
                        <p className="text-xs ">NGN {item?.price}</p>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        </>):(
            <>
                <SwiperSlide className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "></SwiperSlide>
                <SwiperSlide className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "></SwiperSlide>
                <SwiperSlide className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "></SwiperSlide>
                <SwiperSlide className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "></SwiperSlide>
                <SwiperSlide className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "></SwiperSlide>
            </>
        )}
        </Swiper>
     );
}
 
export default DefaultHome;