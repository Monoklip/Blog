import './image-item.scss';

const ImageItem = (props: { elem: { url: string; id: number; } }) => {

    const { url, id } = props.elem;

    return (
        <div className='image-item'>
            <img src={`${url}`} alt="" />
        </div>
    )
};

export default ImageItem;