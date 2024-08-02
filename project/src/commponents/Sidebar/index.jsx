import './index.scss'
import LogoS from '../../assets/images/logo-transparent-png.png'
import {Link, NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faBriefcase, faTools} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        
        <NavLink exact="true" activeclassname="active"  className='about-link' to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active"  className='contact-link' to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active"  className='skills-link' to="/skills">
          <FontAwesomeIcon icon={faTools} color="#4d4d4e" />
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar;