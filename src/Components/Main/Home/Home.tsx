import './home.scss';
import Image from './Image/Image';
import Posts from './Posts/Posts';
import Statistic from './Statistic/Statistic';
import Video from './Video/Video';

const Home = (props: { dataPosts: any }) => {

    const { dataPosts } = props;

    return(
        <div className='home'>
            <Video dataPosts={dataPosts}/>
            <Posts dataPosts={dataPosts}/>
            <Statistic/>
            <Image/>
        </div>
    )
};

export default Home;