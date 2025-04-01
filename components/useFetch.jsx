'use client'

import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [isPending,setIsPending] = useState(false)
    const [product,setProduct] = useState([])
    useEffect(()=>{
        try {
            fetch(url)
            .then(res => res.json())
            .then((data)=>{
                setProduct(data.map(item => ({...item,favorite: false}) ))
                setIsPending(true)
            })
            .catch((error)=>{
                throw error
            })
            
        } catch (error) {
            console.log(error?.message)
        }
    },[url])
    return {isPending,product,setProduct};
}
 