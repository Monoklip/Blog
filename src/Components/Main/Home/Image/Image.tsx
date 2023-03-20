import { useEffect, useState } from 'react';
import './image.scss';
import ImageItem from './ImageItem/ImageItem';

const Image = () => {

    const [image1, setImage1] = useState<boolean>(true);
    const [image2, setImage2] = useState<boolean>(false);
   
    const [dataPosts, setDataPosts] = useState([]);
    const [url, setUrl] = useState<string>(' http://localhost:3000/image');   

    const getPosts = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataPosts(data.sort((a: any, b: any)=> { return b.id - a.id}));
    };

    useEffect(()=>{
        getPosts();
    },[]);

    const imageBtn = () => {
        setImage1(false);
        setImage2(true);
    };

    return(
        <div className='image'>
            {image1 &&
            <>
                <div className="images">
                    {dataPosts.slice(0,8).map((elem: { url: string; id: number;}) => {
                        return <ImageItem elem={elem} key={elem.id}/>
                    })}
                </div>
                <div className="image-btn">
                    <button onClick={imageBtn}>Load More</button>
                </div>
            </>
            }
            {image2 &&
                <div className="images">
                    {dataPosts.map((elem: { url: string; id: number;}) => {
                        return <ImageItem elem={elem} key={elem.id}/>
                    })}
                </div>
            }
        </div>
    )
};

export default Image;