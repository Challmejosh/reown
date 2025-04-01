import { FaBell } from "react-icons/fa";

const MobileNavbar = ({session}) => {
    return ( 
        <div className="md:hidden flex items-center justify-between p-3 ">
            <div className="">
                <img src={session?.user?.image} alt="" className="w-[50px] h-[50px] rounded-full  object-cover" />
            </div>
            <div className="text-2xl">
                <p className="font-semibold">Re<span className="text-yellow-700">o</span>wn</p>
            </div>
            <div className="">
                <FaBell size={24} />
            </div>
        </div>
     );
}
 
export default MobileNavbar;