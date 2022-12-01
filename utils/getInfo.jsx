import { META } from "@consumet/extensions"
const anilist = new META.Anilist();
import { client } from "./redis";

export const getInfo = async (id)=>{ 
    const value = await client.json.get(id)
    if(value){
        console.log('from cache')
        return value
    }else{
        const data =  await anilist.fetchAnimeInfo(id).then(data =>(data))
        client.json.set(id, '$', data)
        return data;
    }
}
