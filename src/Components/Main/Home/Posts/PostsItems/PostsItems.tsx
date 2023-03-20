import { Link } from 'react-router-dom';
import './posts-items.scss';

const PostsItems = (props: {elem: { title: string; id: number; text: string; url: string; comments: number; like: number; }}) => {
    const {
        title,
        url,
        id,
        text,
        like,
        comments
    } = props.elem;

    return(
        <div className='posts-items'>
            <Link to={`./blog/${id}`}>
                <div className="posts-items-image">
                    <img src={`${url}`} alt="" />
                </div>
                <div className="posts-items-title">
                    <h2>{title}</h2>
                </div>
            </Link>
            <div className="posts-items-comments">
                <p>
                    <img src="https://cdn-icons-png.flaticon.com/512/739/739286.png" alt="" />
                    <span>{comments}</span>
                </p>
                <p>
                    <img src="https://cdn-icons-png.flaticon.com/512/2961/2961957.png" alt="" />
                    <span>{like}</span>
                </p>
            </div>
        </div>
    )
};

export default PostsItems;