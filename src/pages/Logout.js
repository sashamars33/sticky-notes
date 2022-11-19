import { Link } from 'react-router-dom'


const Logout = () => {
  return (
    <div>You have logged out!
        <Link to='/'>Click here for home</Link>
        <Link to='/login'>Click here to log back in!</Link>
    </div>
  )
}

export default Logout