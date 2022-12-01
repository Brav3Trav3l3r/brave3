import { createClient } from 'redis'

export const client = createClient({
        url: 'redis://default:vrCFIKB6fJOaYVWZGr0tIPa0iRSHohAk@redis-13075.c262.us-east-1-3.ec2.cloud.redislabs.com:13075'
})

const start = async()=>{
    await client.connect()
}
start()


