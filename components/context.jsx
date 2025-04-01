
'use client'
import { createContext, useState } from "react";
import { useFetch } from "./useFetch";

const AppContext = createContext()

const Context = ({children})=>{
    const {product,isPending,setProduct} = useFetch("https://api.escuelajs.co/api/v1/products")
    const [cart,setCart] = useState([])
    const [favorite,setFavorite] = useState([])
    const [query,setQuery] = useState('')
    const [category,setCategory] = useState('')
    const [cartId,setCartId] = useState(null)
    const [cartExist,setCartExist] = useState(null)
    // ADD TO CART 
    const moveToCart = (item)=>{
        const check = product.find(itm => itm?.id === item?.id)
        if(check){
            const confirm = cart.find(itm => itm?.id === check?.id)
            if(confirm){
                setCartExist(item.id)
                setTimeout(()=>{
                    setCartExist(null)
                },3000)
            }else{
                setCartId(item.id)
                setCart([...cart,{...check, quantity: 1}])
                setTimeout(()=>{
                    setCartId(null)
                },3000)
            }
        }
    }
    const delItem = (item,array,set)=>{
        const check = array.filter(itm=>itm.id !== item.id)
        if(check){
            set(check)
        }
    }
    const addQuantity=(item)=>{
        const check = cart.find(itm => itm.id === item.id)
        if(check){
            setCart(prev => prev.map(itm => itm.id===item.id?{...itm,quantity: itm.quantity + 1} : itm))
        }
    }
    const removeQuantity=(item)=>{
        const check = cart.find(itm => itm.id === item.id)
        if(check){
            setCart(prev => prev.map(itm => itm.id===item.id?{...itm,quantity: itm.quantity - 1} : itm))
        }
    }
    const totalCart = cart.reduce((acc,item)=> acc + item?.quantity, 0)
    const totalPrice = cart.reduce((acc,item)=> acc + item?.price * item.quantity, 0)
    const totalFavorite = favorite.length;
    const favoriteFn = (item) => {
        const updatedProducts = product.map(itm =>
            itm.id === item.id ? { ...itm, favorite: !itm.favorite } : itm
        );
        const updatedFavorites = updatedProducts.filter(itm => itm.favorite);
        setProduct(updatedProducts);
        setFavorite(updatedFavorites);
    };
    

    return (
        <AppContext value={{product,isPending,moveToCart,cartExist,cart,cartId,setCartId,setCart,totalCart,totalPrice,query,setQuery,category,setCategory,delItem,addQuantity,removeQuantity,favorite,totalFavorite,favoriteFn}}>
            {children}
        </AppContext>
    )
}
export {AppContext,Context}