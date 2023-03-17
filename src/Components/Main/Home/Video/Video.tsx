import { useState } from 'react';
import './video.scss';

const Video = (props: { dataPosts: any }) => {

    const { dataPosts } = props;

    const [video, setVideo] = useState<string>(`https://video.wixstatic.com/video/375882_9f1a8e8b364946f38b7eb05436e76503/1080p/mp4/file.mp4`);
    const image = dataPosts.slice(-1).map((elem: { url: string; }) => { return elem.url }); 
    
    return(
        <div className='video'>
            <video loop={true} autoPlay={true} controls={false} muted={true} src={video}></video>
            <div className="video-post">
                <h1>Featured Post</h1>
                <div className="video-post-content">
                    <div className="video-post-content-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="video-post-content-text">
                        <p>Nov 29, 20222 min</p>
                        <h2>Top Hikes In Australia</h2>
                        <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                        <div className="video-post-content-text_footer">
                            <p>0 comments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Video;