import Trending from "./Trending";
import Popular from "./Popular";
export const revalidate = 60;

const Home = () => {
    return ( 
        <div className="home p-2 space-y-8">
            <Popular/>
            <Trending/>
        </div>
     );
}
 
export default Home;