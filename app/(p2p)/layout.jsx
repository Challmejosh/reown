import { auth } from "@/auth";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/searchbar";
import { redirect } from "next/navigation";

const Layout = async ({children}) => {
    const session = (await auth())
     if(!session){
      return redirect('/')
    }
    return ( 
        <>
            <Navigation  />
            <MobileNavbar session={session}/>
            <Navbar session={session} />
            <div className="sm:hidden flex ">
                <SearchBar />
            </div>
            {children}
        </>
     );
}
 
export default Layout;