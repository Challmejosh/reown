import { auth } from "@/auth";
import Category from "@/components/category";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/searchbar";
import SignOutBtn from "@/components/signoutbtn";
import { redirect } from "next/navigation";

const Layout = async ({children}) => {
    const session = (await auth())
    if(!session){
      return redirect('/')
    }
    return ( 
        <div className="bg-[#F6F7F9] flex flex-col gap-5 ">
            <Navigation  />
            <MobileNavbar session={session}/>
            <Navbar session={session} />
            <div className="sm:hidden flex ">
              <SearchBar />
            </div>
            <div className="mt-3 mx-3">
                <Category />
            </div>
            <div className="flex h-fit flex-col text-black bg-purple-200 scrollbar">
              {children}
            </div>
            <SignOutBtn />
        </div>
     );
}
 
export default Layout;