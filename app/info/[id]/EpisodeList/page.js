// import info from '../../../../data/info.json'
import List from './List';

export const revalidate = 30;
const Episodes = async ({params:{id}}) => {
    return (
        <div className="episodes">
            <List id={id}/>
        </div>
    );
}

export default Episodes;

