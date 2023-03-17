import './posts.scss';
import PostsItems from './PostsItems/PostsItems';

const Posts = (props: { dataPosts: any; }) => {

    const { dataPosts } = props;

    return(
        <div className='posts'>
            <h1>Recent Posts</h1>
            <div className="posts-item">
                {dataPosts.map((elem: { title: string; id: number; url: string; text: string; }) =>{
                    return <PostsItems elem={elem} key={elem.id}/>
                })}
            </div>
        </div>
    )
};

export default Posts;