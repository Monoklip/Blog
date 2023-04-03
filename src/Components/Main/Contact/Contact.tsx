import { Link } from 'react-router-dom';
import './contact.scss';

const Contact = () => {
    return(
        <div className='contact'>
            <h1>Work With Me</h1>
            <div className="contact-me">
                <div className="contact-me-image">
                    <img src="https://static.wixstatic.com/media/375882_bdc2f1ccb66744cbbe04d17e05500eed~mv2.jpeg/v1/fill/w_381,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/375882_bdc2f1ccb66744cbbe04d17e05500eed~mv2.jpeg" alt="" />
                </div>
                <div className="contact-me-text">
                    <h2>I am passionate about sharing my knowledge, travel experience and the useful tips I’ve learned on the trail.</h2>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Contact;