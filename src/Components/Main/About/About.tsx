import './about.scss';
import { Link } from 'react-router-dom';

const About = () => {
    return(
        <div className='about'>
            <h1>About Me</h1>
            <div className="about-me">
                <div className="about-me-image">
                    <img src="https://static.wixstatic.com/media/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg/v1/fill/w_491,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg" alt="" />
                </div>
                <div className="about-me-text">
                    <h1>Hi, thanks for dropping by!</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                    <p>
                    This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                    </p>
                    <Link to={'contact'}>
                        <button>Let's work together</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default About;