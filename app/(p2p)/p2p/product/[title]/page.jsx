import { client } from "@/sanity/lib/client";


const PeerDetail = async ({params}) => {

    const { title } = params
    const query = `*[_type=="post" && title==$title ][0]{
        amount,
        author ->{
        name,
        image
        },
        image,
        description,
        slug,
        title
    }`;
    let post ;
    const data = await client.withConfig({useCdn: false}).fetch(query, { title })
    return ( 
        <div className="w-full flex flex-col items-center justify-center gap-3 p-5">
            <div className="w-full bg-green-200 p-3 mx-56 ">
                <img src={data?.image} alt="image" className="w-full bg-red-200 rounded-3xl object-contain h-[150px] " />
            </div>
            <div className="w-full mx-56 flex flex-col items-start justify-start gap-2 ">
                <div className="flex flex-col items-start justify-center ">
                    <h1 className="text-2xl font-bold">{data?.title}</h1>
                    <p className="text-justify">{data?.description}</p>
                </div>
                <div className="flex justify-end items-center ">
                    <div className="flex justify-center items-center gap-2">
                        <img src={data?.author?.image} alt="image" className="w-[50px] h-[50px] rounded-full object-cover" />
                        <p>{data?.author?.name}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PeerDetail;