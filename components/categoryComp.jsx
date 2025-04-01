'use client'
import { useContext } from "react";
import { AppContext } from "./context";
import Products from "./Products";

const CategoryComp = ({category}) => {
    const {product,isPending} = useContext(AppContext)
    const filter = product.filter((item) => item?.category?.name.toLowerCase() === category.toLowerCase())
    return ( 
        <div className="">
            <Products product={filter} isPending={isPending} />
        </div>
     );
}
 
export default CategoryComp;