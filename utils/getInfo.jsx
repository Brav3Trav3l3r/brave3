import { META } from "@consumet/extensions"
const anilist = new META.Anilist();
import { client } from "./redis";

export const getInfo = async (id) => {
    let startTime = performance.now()
    const value = await client.json.get(id)
    let endTime = performance.now()
    console.log(` cache ${id}: ${endTime - startTime}ms`)
    if (value) {
        return value
    } else {
        let startTime = performance.now()
        const data = await anilist.fetchAnimeInfo(id).then(data => (data))
        let endTime = performance.now()
        console.log(`fetch ${id}: ${endTime - startTime}ms`)
        client.json.set(id, '$', data)
        return data;
    }
}
