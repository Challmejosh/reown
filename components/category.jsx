'use client'

import {useFetch} from "./useFetch"
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperSlide,Swiper } from "swiper/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence,motion } from "framer-motion";

const Category = () => {
    const {product,isPending} = useFetch('https://api.escuelajs.co/api/v1/categories')
    const pathname = usePathname()
    return ( 
        <div className="my-5">
            {isPending ?(
                <Swiper 
                pagination
                modules={[Pagination,Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                className="w-full">
                    <SwiperSlide className={`cursor-pointer `}>
                        <motion.div className=""
                        initial={{opacity:0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1,delay: 0.2}}
                        >
                            <Link className={`flex flex-col items-center justify-center gap-5 `} href='/homepage'>
                                <img src='/globe.svg' alt="all" className={` ${pathname === "/homepage" && "border-[2px] border-yellow-600" } w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] rounded-lg object-cover`} />
                                <p className="font-semibold w-[50px] text-xs sm:text-sm sm:w-[100px] text-center ">All</p>
                            </Link>
                        </motion.div>
                    </SwiperSlide>
                    {product?.map(item => (
                        <AnimatePresence key={item.id} mode='wait'>
                            <SwiperSlide key={item?.id} className="cursor-pointer "
                            >
                                <motion.div className=""
                                initial={{opacity:0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1, delay: item.id * 0.2}}
                                >
                                    <Link className=" flex flex-col items-center justify-center gap-5" href={`/category/${item?.name}`}>
                                        <img src={item?.image} alt="" className={` ${pathname === `/category/${item?.name}` && "border-[2px] border-yellow-600" } w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] rounded-lg object-cover`} />
                                        <p className="font-semibold text-xs sm:text-sm w-[50px] sm:w-[100px] text-center ">{item?.name}</p>
                                    </Link>
                                </motion.div>
                            </SwiperSlide>
                        </AnimatePresence>
                    ))}
                </Swiper>
            ):(
                <Swiper
                modules={[Pagination,Navigation]}
                spaceBetween={30}
                slidesPerView={4}
                className="w-full flex items-center justify-center">
                        <SwiperSlide className="cursor-pointer flex flex-col items-center justify-center w-full gap-5 animate-pulse ">
                            <div className="w-[50px] bg-slate-200 h-[50px] sm:w-[100px] sm:h-[100px] rounded-lg object-cover  "></div>
                        </SwiperSlide>
                        <SwiperSlide className="cursor-pointer flex flex-col items-center justify-center w-full gap-5 animate-pulse ">
                            <div className="w-[50px] bg-slate-200 h-[50px] sm:w-[100px] sm:h-[100px] rounded-lg object-cover  "></div>
                        </SwiperSlide>
                        <SwiperSlide className="cursor-pointer flex flex-col items-center justify-center w-full gap-5 animate-pulse ">
                            <div className="w-[50px] bg-slate-200 h-[50px] sm:w-[100px] sm:h-[100px] rounded-lg object-cover  "></div>
                        </SwiperSlide>
                        <SwiperSlide className="cursor-pointer flex flex-col items-center justify-center w-full gap-5 animate-pulse ">
                            <div className="w-[50px] bg-slate-200 h-[50px] sm:w-[100px] sm:h-[100px] rounded-lg object-cover  "></div>
                        </SwiperSlide>
                        <SwiperSlide className="cursor-pointer flex flex-col items-center justify-center w-full gap-5 animate-pulse ">
                            <div className="w-[50px] bg-slate-200 h-[50px] sm:w-[100px] sm:h-[100px] rounded-lg object-cover  "></div>
                        </SwiperSlide>
                        <SwiperSlide className="cursor-pointer flex flex-col items-center justify-center w-full gap-5 animate-pulse ">
                            <div className="w-[50px] bg-slate-200 h-[50px] sm:w-[100px] sm:h-[100px] rounded-lg object-cover  "></div>
                        </SwiperSlide>
                </Swiper>
            )}
        </div>
     );
}
 
export default Category;