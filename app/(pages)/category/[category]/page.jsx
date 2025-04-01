import CategoryComp from "@/components/categoryComp";

const Page =  async ({params}) => {
    const {category} = (await params)
    return ( 
        <div className="">
            <CategoryComp category={category} /> 
        </div>
     );
}
 
export default Page;