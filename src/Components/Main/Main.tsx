import './main.scss';
import { Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import { useEffect, useState } from 'react';
import PostsRoutes from './Home/Posts/PostsRoutes/PostsRoutes';
import Blog from './Blog/Blog';
import About from './About/About';
import Contact from './Contact/Contact';

const Main = () => {

    const [dataPosts, setDataPosts] = useState([]);
    const [url, setUrl] = useState<string>('https://641ca6da1a68dc9e460eba57.mockapi.io/posts');   

    const getPosts = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataPosts(data.sort((a: any, b: any)=> { return b.id - a.id}));
    };

    const [dataImage, setDataImage] = useState([]);
    const [urlImage, setUrlImage] = useState<string>('https://641ca6da1a68dc9e460eba57.mockapi.io/image');   

    const getImage = async() => {
        const response = await fetch(urlImage);
        const data = await response.json();
        setDataImage(data.sort((a: any, b: any)=> { return b.id - a.id}));
    };

    useEffect(()=>{
        getPosts();
        getImage();
    },[]);

    return(
        <Routes>
            <Route path='/' element={<Home dataPosts={dataPosts}/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            {dataPosts.map((elem: { title: string; text: string; id: number; url: string; like: number; comments: number; }) => {
                return <Route path={`/blog/${elem.id}`} element={<PostsRoutes elem={elem} key={elem.id}/>}></Route>
            })}
             {dataImage.map((elem: { title: string; text: string; id: number; url: string; like: number; comments: number; }) => {
                return <Route path={`/image/${elem.id}`} element={<PostsRoutes elem={elem} key={elem.id}/>}></Route>
            })}
        </Routes>
    )
};

export default Main;