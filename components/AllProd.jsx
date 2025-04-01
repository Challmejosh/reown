'use client'
import { useContext } from "react";
import { AppContext } from "./context";
import OverAll from "./overAllProduct";
import Products from "./Products";

const AllProd = () => {
    const {query,product,isPending} = useContext(AppContext)
    const searchProd = product.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase()) || item.category.name.toLowerCase().includes(query.toLowerCase())
    );
    return ( 
        <div className="h-full">
            {query ? (
                <div className="">
                    <p className="">Search Result for {query}</p>
                    <div className="">
                        <Products isPending={isPending} product={searchProd} />
                    </div>
                </div>
            ):(
                <OverAll />
            )}
        </div>
     );
}
 
export default AllProd;