import './header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div className='header'>
            <Link to={'/'}>
                <div className="header-logo">
                    <h1>On The Trail</h1>
                    <p>My Travel Blog</p>
                </div>
            </Link>
            <div className="header-menu">
                <Link to={'./blog'}>Blog</Link>
                <Link to={'./about'}>About Me</Link>
                <Link to={'./contact'}>Work With Me</Link>
                <a>Contact</a>
            </div>
            <button className="header-sing_in">Sing In</button>
        </div>
    )
};

export default Header;