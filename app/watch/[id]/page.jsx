import { META } from "@consumet/extensions"

export const revalidate = 120;
const anilist = new META.Anilist();

const Watch = async ({ params: { id } }) => {
    const data = await anilist.fetchEpisodeSources(id).then(data => data)
    // const res = await fetch(`https://api.consumet.org/meta/anilist/watch/${id}`)
    // const data = await res.json()
    // console.log(data)
    return (

        <div className="watch">
            {/* <video src={data.headers.Referer} className='w-[1100px] h-[650px]'></video> */}
            {data.sources.map(video => (
                <div className="video">
                    <h1>{video.quality}</h1>
                    <iframe src={video.url} className='w-[1100px] h-[650px]' allow="fullscreen" frameborder="0"  ></iframe>
                </div>
            ))}

        </div>
    );
}

export default Watch;