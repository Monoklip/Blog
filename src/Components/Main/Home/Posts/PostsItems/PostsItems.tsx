import './posts-items.scss';

const PostsItems = (props: {elem: { title: string; id: number; text: string; url: string; }}) => {
    const {
        title,
        url,
        id,
        text
    } = props.elem;

    return(
        <div className='posts-items'>
            <div className="posts-items-image">
                <img src={`${url}`} alt="" />
            </div>
            <div className="posts-items-text">
                <div className="posts-items-text-title">
                    <h2>{title}</h2>
                </div>
                <div className="posts-items-text-comments">
                    <p>431231212412</p>
                </div>
            </div>
        </div>
    )
};

export default PostsItems;