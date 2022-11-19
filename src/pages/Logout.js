import { Link } from 'react-router-dom'


const Logout = () => {
  return (
    <div>You have logged out!
        <Link to='https://sticky-notes-organizing.netlify.app/'>Click here for home</Link>
        <Link to='https://sticky-notes-organizing.netlify.app/login'>Click here to log back in!</Link>
    </div>
  )
}

export default Logout