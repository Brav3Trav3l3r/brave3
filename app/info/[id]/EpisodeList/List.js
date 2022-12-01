import Image from 'next/image';
import Link from 'next/link';
import { getInfo } from '../../../../utils/getInfo';

const List = async ({id}) => {
    const info = await getInfo(id)

    return (
        <div  className="episodes p-4 mt-4 lg:mt-8 max-w-6xl mx-auto">
            <h1 className='mb-4 border-b-2 border-purple-500 p-2'>Epsiodes</h1>
            <div className="cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 ">
                {info.episodes.map(ep => (
                    <Link href={`/watch/${ep.id}`}><div className="card w-full p-1" key={ep.id}>
                        <div className="image w-full h-28 relative rounded-lg truncate">
                            <Image src={ep.image} fill={true} className='object-cover' />
                        </div>
                        <h1 className='title-third line-clamp-2' ><span className='text-purple-500'>{ep.number}.</span>{ep.title}</h1>
                    </div></Link>
                ))}
            </div>
        </div>
       
    );
}

export default List;