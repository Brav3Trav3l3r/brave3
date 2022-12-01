import Link from 'next/link';

import { BsHouseFill } from 'react-icons/bs';

const Navbar = () => {
    return ( 
        <nav className="fixed bg-zinc-800 border-t-2 lg:border-r-2  border-zinc-700 h-14 bottom-0 w-full lg:left-0 lg:h-screen lg:w-20 flex items-center justify-center ">
            <Link href="/"><BsHouseFill className=' text-2xl'/></Link>
        </nav>
     );
}
 
export default Navbar;