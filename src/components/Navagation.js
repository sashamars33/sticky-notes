import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {FaInfoCircle} from 'react-icons/fa'
import {FaUserCircle} from 'react-icons/fa'


const Navagation = ({logout, login}) => {
  return (
    <header className='headerNav flex'>
        <ul className='flex'>
            <li><Link to='https://sticky-notes-organizing.netlify.app/'><FaHome/></Link></li>
            <li><Link to='https://sticky-notes-organizing.netlify.app/about'><FaInfoCircle/></Link></li>
            <li>{login ? <Link to='https://sticky-notes-organizing.netlify.app/pages'><FaUserCircle/></Link> : <Link to='https://sticky-notes-organizing.netlify.app/login'><FaUserCircle/></Link>}</li>
            <li>{login ? <Link className='logout' to='https://sticky-notes-organizing.netlify.app/logout' onClick={() => logout()}>Logout</Link> : <Link className='hidden' to='https://sticky-notes-organizing.netlify.app/logout' onClick={() => logout()}>Logout</Link> }</li>
        </ul>
    </header>
  )
}

export default Navagation