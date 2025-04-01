'use client'
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "./context";
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const {query,setQuery} = useContext(AppContext);
    const router = useRouter()
    return ( 
        <div className="w-full text-black rounded-2xl shadow bg-white flex items-center justify-start px-2 py-1 gap-3 ">
            <FaSearch size={24} />
            <form onSubmit={(e)=>{
                e.preventDefault();
                router.push('/homepage');
            }} action="" className="w-full" >
                <input type="search" name="" defaultValue={query} onChange={(e)=>setQuery(e.target.value)} placeholder="search anything..." className="flex focus:outline-none p-2 px-5 w-full text-black " id="" />
            </form>
        </div>
     );
}
 
export default SearchBar;