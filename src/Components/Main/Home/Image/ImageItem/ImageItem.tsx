import { Link } from 'react-router-dom';
import './image-item.scss';

const ImageItem = (props: { elem: { url: string; id: number; } }) => {

    const { url, id } = props.elem;

    return (
        <Link to={`/image/${id}`}>
            <div className='image-item'>
                <img src={`${url}`} alt="" />
            </div>
        </Link>
    )
};

export default ImageItem;