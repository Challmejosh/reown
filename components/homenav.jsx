import Link from "next/link";

const HomeNav = () => {
    return ( 
        <div className="bg-black/80 w-full p-5 py-8 h-[50px] fixed shadow-sm z-10 flex items-center justify-between ">
            <div className="text-2xl">
                <p className="font-semibold md:text-4xl lg:text-5xl ">Re<span className="text-yellow-700">o</span>wn</p>
            </div>
            <div className="">
                <Link href='/signup' className='bg-purple-400 text-white rounded-md cursor-pointer px-5 py-2 text-center ' >Sign In</Link>
            </div>
        </div>
     );
}
 
export default HomeNav;