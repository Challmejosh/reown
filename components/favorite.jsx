'use client'
import { useContext } from "react";
import { AppContext } from "./context";
import Products from "./Products";

const Favorite = () => {
    const {favorite,isPending} = useContext(AppContext)
    return ( 
        <div className={` ${favorite.length <= 0 && 'h-screen'} flex flex-col items-center justify-center w-full h-full`}>
            {favorite.length <=0 ? 
            (<p className="text-center w-full text-2xl sm:text-4xl md:text-5xl font-semibold ">No Favorite Yet</p>)
            : 
             (<Products product={favorite} isPending={isPending} />)
            }
        </div>
     );
}
 
export default Favorite;