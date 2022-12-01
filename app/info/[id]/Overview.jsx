'use client'

import Image from 'next/image';
import Link from 'next/link';
// import info from '../../../data/info.json'
import parse from 'html-react-parser';
import { useState } from 'react';


import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Overview = ({info}) => {

    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <div className="overview mb-16 min-h-fit max-w-6xl md:mx-auto overflow-hidden p-4 space-y-6 ">
            {info.description? <div className="description bg-zinc-800 p-4 pt-2 pb-0 rounded-lg">
                <div className="para overflow-hidden md:w-3/4 mx-auto" style={{ height: showMe ? "max-content" : "150px" }} >
                    <h1 className='mb-4 p-2 border-b-2 border-purple-500'>Description</h1>
                    {parse(`<p className='opacity-80 text-sm tracking-wide mb-4 mx-auto leading-relaxed'>${info.description}</p>`)}
                </div>
                <button onClick={toggle} className='select-none outline-none bg-zinc-800 mx-auto w-full pt-2 text-purple-500'>{showMe ? <IoIosArrowUp className=' w-full text-2xl' /> : <IoIosArrowDown className=' w-full text-2xl' />}</button>
            </div> :""}

            <div className="relations ">
                <h1 className='mb-2 text-lg select-none'>Relations</h1>
                <div className="cards flex overflow-x-auto gap-4">
                    {info.relations.map(item => (
                        <Link href={`/info/${item.id}`}><div className="card w-28" key={item.id} prefetch={false}>
                            <div className="image select-none relative w-28 h-40 rounded-md truncate">
                                <Image src={item.image} fill={true} className='object-cover' />
                            </div>
                            <h1 className='title-third line-clamp-2'>{item.title.romaji}</h1>
                        </div></Link>
                    ))}
                </div>
            </div>

            <div className="characters">
                <h1 className='mb-2 text-lg select-none'>Characters</h1>
                <div className="cards flex overflow-x-auto gap-4 ">
                    {info.characters.map((item => (
                        <div className="card" key={item.name.userPreferred}>
                            <div className="image select-none w-24 h-24 relative rounded-lg truncate mb-2 ">
                                <Image src={item.image} fill={true} className='object-cover' />
                            </div>
                            <h1 className='title-third line-clamp-2'>{item.name.full}</h1>
                        </div>
                    )))}
                </div>
            </div>

            <div className="recomendations">
                <h1 className='mb-2 text-lg select-none'>Recommendations</h1>
                <div className="cards overflow-x-auto relative flex ">
                    {info.recommendations.map(item => (
                         <Link href={`/info/${item.id}`} >{item.id ?<div className="card mr-4 w-28" key={item.id} prefetch={false}>
                            <div className="image select-none relative w-28 h-40 rounded-md truncate">
                                <Image src={item.image} fill={true} alt={item.title.userPreferred} className='object-cover select-none' />
                            </div>
                            <h1 className='title-third line-clamp-2'>{item.title.userPreferred}</h1>
                        </div> : <div className='hidden'></div>}</Link> 
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Overview;