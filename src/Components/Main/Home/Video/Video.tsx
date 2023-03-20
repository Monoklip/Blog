import { useState } from 'react';
import { Link } from 'react-router-dom';
import './video.scss';

const Video = (props: { dataPosts: any }) => {

    const { dataPosts } = props;

    const [video, setVideo] = useState<string>(`https://video.wixstatic.com/video/375882_9f1a8e8b364946f38b7eb05436e76503/1080p/mp4/file.mp4`);
    const image = dataPosts.slice(-1).map((elem: { url: string; }) => { return elem.url }); 
    
    return(
        <div className='video'>
            <video loop={true} autoPlay={true} controls={false} muted={true} src={video}></video>
            <Link to={'./blog'}>
                <div className="video-person">
                    <div className="video-person-image">
                        <img src="https://static.wixstatic.com/media/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg/v1/crop/x_1646,y_0,w_3950,h_3840/fill/w_144,h_140,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1145254743.jpg" alt="" />
                    </div>
                    <div className="video-person-text">
                        <h1>Welcome</h1>
                        <p>Join my journey</p>
                    </div>
                </div>
            </Link>
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