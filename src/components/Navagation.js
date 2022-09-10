import {Link} from 'react-router-dom'

const Navagation = () => {
  return (
    <header>
        <ul className='flex'>
            <li><Link to='/'>Home</Link></li>
        </ul>
    </header>
  )
}

export default Navagation