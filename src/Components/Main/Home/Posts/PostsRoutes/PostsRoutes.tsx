import './posts-routes.scss';

const PostsRoutes = (props: { elem: { title: string; text: string; id: number; url: string; like: number; comments: number; }}) => {

    const { title, id, text, url,comments, like } = props.elem;

    return(
        <div className='posts-routes'>
            <div className="posts-routes-title">{title}</div>
            <div className="posts-routes-image">
                <img src={`${url}`} alt="" />
            </div>
            <div className="posts-routes-counter">
                <div className="posts-routes-counter_comments">
                    <img src="https://cdn-icons-png.flaticon.com/512/739/739286.png" alt="" />
                    <span>{comments}</span>
                </div>
                <div className="posts-routes-counter_like">
                    <img src="https://cdn-icons-png.flaticon.com/512/2961/2961957.png" alt="" />
                    <span>{like}</span>
                </div>
            </div>
            <div className="posts-routes-text">{text}</div>
        </div>
    )
};

export default PostsRoutes;