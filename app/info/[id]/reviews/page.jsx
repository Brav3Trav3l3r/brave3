import { getInfo } from "../../../../utils/getInfo";

const Reviews = async ({params:{id}}) => {
    const info = await getInfo(id)

    return ( 
        <div className="reviews p-4 mt-4 lg:mt-8 max-w-6xl mx-auto">
            <h1>this is reviews page</h1>
            <p className="mt-4 w-full mx-auto">{info.description}</p>
        </div>
     );
}
 
export default Reviews;