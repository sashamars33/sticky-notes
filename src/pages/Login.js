import { Link } from 'react-router-dom'

const LoginSignup = () => {
  return (
    <div>
        <form action="/login" method="POST">
            <input type="email" name="email" placeholder="Email"></input>
            <input type="password" name="password" placeholder="Password"></input>
            <input className="button" type="submit"></input>
        </form>

        <p>Don't have an account?<Link to='/signup'>Click here to sign-up</Link></p>
    </div>
  )
}

export default LoginSignup