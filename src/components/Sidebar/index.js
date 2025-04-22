import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoZ from '../../assets/images/That boy z.JPG'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome } from '@fortawesome/free-solid-svg-icons'

 const Sidebar = () => {
  return (
    <div className='nav-bar'>
    
    <Link className='logo' to= '/'>
    <img className="profilePic" src={LogoZ} alt="profilePic" />


    </Link>
    <nav>
    <NavLink
    to="/"
    end              
    className={({ isActive }) => (isActive ? 'active' : '')}
>
  <FontAwesomeIcon icon={faHome} />
</NavLink>
  
    </nav>
    </div>
  )
 
 
 
 
    
 }
export default Sidebar