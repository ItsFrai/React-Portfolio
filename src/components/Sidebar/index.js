import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/f-letter-logo-png-1568.png'
import LogoSubtitle from '../../assets/images/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (

    <div className = 'nav-bar'> 
        <Link className = 'logo' to='/'>
            <img src = {LogoS} />
            <img className = 'sub-logo'src = {LogoSubtitle} />
        </Link>
        <nav>
        <NavLink exact='true'activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color= '#4d4d4e'/>
        </NavLink>
        <NavLink exact='true'activeclassname='active' className = 'about-link' to='/about'>
            <FontAwesomeIcon icon={faUser} color= '#4d4d4e'/>
        </NavLink>
        <NavLink exact='true'activeclassname='active' className = 'contact-link' to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color= '#4d4d4e'/>
        </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel= 'noreferrer' href = 'https://www.linkedin.com/in/fraidoon-pourooshasb-52a46a243/' >
                    <FontAwesomeIcon icon={faLinkedinIn} color= "#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target = "_blank" rel= 'noreferrer' href = 'https://github.com/ItsFrai/' >
                    <FontAwesomeIcon icon={faGithub} color= "#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar