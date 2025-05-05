'use client'
import { useParams } from "next/navigation";

const PeerDetail = () => {
    const { prod } = useParams();
    return ( 
        <div className="">
            {prod}
        </div>
     );
}
 
export default PeerDetail;