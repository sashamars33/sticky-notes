import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div class="form">
    <h1 id="instructions">Sign up to share your dad jokes and vote on others jokes</h1>
    <form action="/signup" method="POST">
        <input type="text" name="userName" placeholder="User Name"></input>
        <input type="email" name="email" placeholder="Email"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <input type="password" name="confirmPassword" placeholder="Confirm Password"></input>
        <input class="button" type="submit"></input>
    </form>

    <p>Already have an account?<Link to='/login'>Click here to log-in</Link></p>
</div>
  )
}

export default Signup