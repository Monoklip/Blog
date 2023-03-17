import './main.scss';
import { Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import { useEffect, useState } from 'react';

const Main = () => {

    const [dataPosts, setDataPosts] = useState([]);
    const [url, setUrl] = useState<string>(' http://localhost:3000/posts');   

    const getPosts = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataPosts(data.sort((a: any, b: any)=> { return b.id - a.id}));
    };

    useEffect(()=>{
        getPosts();
    },[]);

    return(
        <Routes>
            <Route path='/' element={<Home dataPosts={dataPosts}/>}></Route>
        </Routes>
    )
};

export default Main;