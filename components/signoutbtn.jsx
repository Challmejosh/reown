import { signOut } from "@/auth";

const SignOutBtn = async () => {
    return (
        <form action={
            async ()=>{
                'use server'
                await signOut({redirectTo: '/'})
            }
        } className="fixed bottom-15 right-3 " >
            <button type="submit" className="cursor-pointer animate-pulse bg-red-600 text-white py-3 px-5 rounded-md flex items-center justify-center  " >Sign out</button>
        </form>
     );
}
 
export default SignOutBtn;