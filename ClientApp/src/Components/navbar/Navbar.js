import './Navbar.css'
import {Link} from 'react-scroll'

export default function Navbar(){
        return(
            <nav id="navbar">
                <div id="navbar_content">
                <Link id="logo" to="header" spy={true} smooth={true} duration={1000}>Ґазда</Link>
                    <div>
                        <ul id="my-menu">
                            <li><Link className="navlink" to="dishes" spy={true} smooth={true} duration={1000}>Пропозиції</Link></li>
                            <li><Link className="navlink" to="description" spy={true} smooth={true} duration={1000}>Про нас</Link></li>
                            <li><Link className="navlink" to="comments" spy={true} smooth={true} duration={1000}>Відгуки</Link></li>
                            <li><Link className="navlink" to="about-us" spy={true} smooth={true} duration={1000}>Контакти</Link></li>
                        </ul>
                    </div>
                    <a id="menu-btn" href="#">Меню</a>
                </div>
            </nav>
        )
}