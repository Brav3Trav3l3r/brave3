import { getInfo } from '../../../utils/getInfo';
import Overview from './Overview';

const Info = async ({ params: { id } }) => {
    let startTime = performance.now()
    const info = await getInfo(id)
    let endTime = performance.now()
    console.log(` response time: ${endTime - startTime}ms`)

    return (
        <div className="info w-full relative ">
            <Overview info={info} />
        </div >
    );
}

export default Info;