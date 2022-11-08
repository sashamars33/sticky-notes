import { Link } from 'react-router-dom'

const LoginSignup = () => {
  return (
    <div className='info-form'>
        <form action="/login" method="POST">
            <input type="email" name="email" placeholder="Email"></input>
            <input type="password" name="password" placeholder="Password"></input>
            <input className="button" type="submit"></input>
        </form>
        <p>Don't have an account?<Link to='/signup' style={{background: '#f5f5f5', color: '#050505', padding: '1%', borderRadius: '10px', margin: '0 2%'}}>Click Here</Link></p>
    </div>
  )
}

export default LoginSignup