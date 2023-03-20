import './footer.scss';
import { Link } from 'react-router-dom';

const Footer =() => {
    return(
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-logo">
                    <h1>On The Trail</h1>
                    <p>My Travel Blog</p>
                </div>
                <div className="footer-top-link">
                    <Link to={'./blog'}>Blog</Link>
                    <Link to={'./about'}>About Me</Link>
                    <Link to={'./contack'}>Work With Me</Link>
                    <Link to={'./contack'}>Contack</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2035 by On the Trail</p>
            </div>
        </div>
    )
};

export default Footer;