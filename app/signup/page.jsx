import { signIn } from '@/auth';
import { FaArrowRight} from 'react-icons/fa6';
const Page = async () => {

    return ( 
        <div className="flex items-center h-screen bg-[#F6F7F9] justify-center">
            <div className="bg-white gap-10 w-[600px]  flex-col z-10 h-[300px] rounded-lg md:rounded-2xl flex items-center justify-center ">
                <p className="">Sign In</p>
                <div className="">
                    <form action={async()=>{
                        'use server'
                        await signIn('Google',{redirectTo: '/homepage'})
                    }}>
                        <button className='bg-purple-300 py-3 px-5 items-center justify-center rounded-md shadow-lg cursor-pointer flex gap-2 ' type="submit"> <FaArrowRight /> Sign In </button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Page;