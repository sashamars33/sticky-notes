import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {FaInfoCircle} from 'react-icons/fa'
import {FaUserCircle} from 'react-icons/fa'


const Navagation = ({logout, login}) => {
  return (
    <header className='headerNav flex'>
        <ul className='flex'>
            <li><Link to='/'><FaHome/></Link></li>
            <li><Link to='/about'><FaInfoCircle/></Link></li>
            <li>{login ? <Link to='/pages'><FaUserCircle/></Link> : <Link to='/login'><FaUserCircle/></Link>}</li>
            <li>{login ? <Link className='logout' to='/logout' onClick={() => logout()}>Logout</Link> : <Link className='hidden' to='/logout' onClick={() => logout()}>Logout</Link> }</li>
        </ul>
    </header>
  )
}

export default Navagation