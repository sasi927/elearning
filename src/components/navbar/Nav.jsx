import react, { useCallback, useEffect, useState } from 'react';
import './Nav.css'
import logo from '../../../public/assets/logo.png'
import { Link } from 'react-scroll';
const Nav = () => {
    const [dark,setDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 200 ? setDark(true) : setDark(false);
        };
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    },[]);
    return(

        <>
        <nav className={`container ${dark ? 'darkcolor' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='testmon' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></button></li>
        </ul>
        </nav>
        </>
    )
}
export default Nav;