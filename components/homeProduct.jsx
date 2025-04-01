import { FaHeart, FaPlus } from "react-icons/fa";

const HomeProduct = ({product,isPending}) => {

    return ( 
        <div className={`${product.length <= 4 && 'h-srceen' } grid grid-cols-2 mx-3 justify-center sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3`}>
        {isPending ? (<>
        {product?.slice(0,10).map(item=>(
            <div className={` bg-white flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px]`}key={item?.id}>
                <div className="flex items-center justify-end gap-5 ">
                    <FaHeart className={`${item?.favorite ? "text-red-600" : ""} cursor-pointer`} />
                    <FaPlus className="cursor-pointer" />
                </div>
                <div className="flex items-start justify-center flex-col gap-2 ">
                    <div className="w-full flex items-center justify-center ">
                        <img src={item?.category?.image} alt="" className="w-full h-[120px] " />
                    </div>
                    <div className="flex flex-col items-start ">
                        <p className="text-xs line-clamp-1 font-semibold">{item?.title}</p>
                        <p className="text-xs ">${item?.price}</p>
                    </div>
                </div>
            </div>
        ))}
        </>):(
            <>
                <div className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "></div>
                <div className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "></div>
                <div className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "></div>
                <div className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "></div>
                <div className="bg-slate-100 animate-pulse flex flex-col justify-center gap-2 p-5 rounded-2xl w-full xl:w-[220px] h-[220px] "></div>
            </>
        )}
    </div>
     );
}
 
export default HomeProduct;