'use client'

import { useFetch } from "../useFetch";
import 'swiper/css'
import { Navigation,Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'

const Category = ({tab}) => {
    const {product,isPending} = useFetch('https://api.escuelajs.co/api/v1/categories')
    return ( 
        <div className="flex items-center justify-center ">
             {isPending ? (
                <div className="w-full flex items-center justify-center flex-wrap gap-5 ">
                    <>
                    <div onClick={()=>tab('')} className={`cursor-pointer `}>
                        <div className={`flex flex-col rounded-lg border-white border py-2 px-3 items-center justify-center gap-5 `}>
                            <p className="font-semibold w-[50px] text-xs sm:text-sm sm:w-[100px] text-center ">All</p>
                        </div>
                    </div>
                    {product?.map(item => (
                        <div onClick={()=>tab(item?.name)} key={item?.id} className="cursor-pointer ">
                                <div className="w-fit flex flex-col rounded-lg border-white border py-2 px-3 items-center justify-center gap-5 ">
                                    <p className="font-semibold text-xs sm:text-sm text-center ">{item?.name}</p>
                                </div>
                        </div>
                    ))}
                    </>
                <Swiper 
                 loop={true} modules={[Navigation,Pagination]} spaceBetween={0} slidesPerView={1} pagination={{clickable:true}} autoplay={{delay: 200 }}
                className="w-full h-[200px]">
                    {product?.map((item) => (
                        <SwiperSlide key={item.id} className="w-full h-[200px] relative">
                            <img src={item?.image} alt="" className="w-full h-full object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            ):(
                <div className="w-full h-[20vw] flex items-center justify-center">
                        <div className="cursor-pointer flex flex-col items-center justify-center w-full gap-5 animate-pulse ">
                            <div className="w-[60px] bg-slate-100 h-[10px] sm:w-[60px] sm:h-[30px] rounded-lg object-cover  "></div>
                        </div>
                        <div className="cursor-pointer flex flex-col items-center justify-center w-full gap-5 animate-pulse ">
                            <div className="w-[60px] bg-slate-100 h-[10px] sm:w-[60px] sm:h-[30px] rounded-lg object-cover  "></div>
                        </div>
                        <div className="cursor-pointer flex flex-col items-center justify-center w-full gap-5 animate-pulse ">
                            <div className="w-[60px] bg-slate-100 h-[10px] sm:w-[60px] sm:h-[30px] rounded-lg object-cover  "></div>
                        </div>
                        <div className="cursor-pointer flex flex-col items-center justify-center w-full gap-5 animate-pulse ">
                            <div className="w-[60px] bg-slate-100 h-[10px] sm:w-[60px] sm:h-[30px] rounded-lg object-cover  "></div>
                        </div>
                        <div className="cursor-pointer flex flex-col items-center justify-center w-full gap-5 animate-pulse ">
                            <div className="w-[60px] bg-slate-100 h-[10px] sm:w-[60px] sm:h-[30px] rounded-lg object-cover  "></div>
                        </div>
                        <div className="cursor-pointer flex flex-col items-center justify-center w-full gap-5 animate-pulse ">
                            <div className="w-[60px] bg-slate-100 h-[10px] sm:w-[60px] sm:h-[30px] rounded-lg object-cover  "></div>
                        </div>
                </div>
            )}
        </div>
     );
}
 
export default Category;