import { auth } from "@/auth";
import Cart from "@/components/cart";

const Page =async () => {
    const session = (await auth())
    return ( 
        <div className="">
            <Cart session={session} />
        </div>
     );
}
 
export default Page;