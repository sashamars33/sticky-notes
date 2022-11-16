import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="info-form">
    <h1 id="instructions">Sign up to get your notes organized.</h1>
    <form action="/signup" method="POST">
        <input type="text" name="userName" placeholder="User Name"></input>
        <input type="email" name="email" placeholder="Email"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <input type="password" name="confirmPassword" placeholder="Confirm Password"></input>
        <input className="button" type="submit"></input>
    </form>

    <p>Already have an account?<Link to='/login' style={{background: '#f5f5f5', color: '#050505',padding: '1%', borderRadius: '10px', margin: '0 2%'}}>Click Here</Link></p>
</div>
  )
}

export default Signup