import { client } from "@/sanity/lib/client";
import Market from "../market";
import Nav from "../nav";
import { allPost } from "@/sanity/lib/query";
import { auth } from "@/auth";
import { createPost } from "@/components/action";

const PeerToPeer = async () => {
    const posts = await client.fetch(allPost)
    const session = (await auth())
    const sellerPost = `*[_type=="post" && email == $email ]{
        title,
        author,
        authorImg,
        amount
        }`
    const email = session?.user?.email
    const getSeller = await client.withConfig({useCdn: false}).fetch(sellerPost, { email })
    const onSubmit = async (e,title,amount,quantity,description,image)=>{
        "use server"
        e.preventDefault();
        alert("good")
        createPost(title,amount,quantity,description,image)
    }
    return ( 
        <div className="relative min-h-screen bg-purple-200 w-full flex flex-col items-center justify-start ">
            <Nav />
            <Market posts={posts} seller={getSeller} submit={onSubmit} />
        </div>
     );
}
 
export default PeerToPeer;