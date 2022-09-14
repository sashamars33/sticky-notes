import { Link } from 'react-router-dom'

const Home = ({login}) => {
  return (
    <>
        <h1>Sticky Notes</h1>
        <p>Create personalized sticky-note boards where you can leave yourself importants notes, keep information, or whatever you like!</p>

        <Link to='/signup'>Sign up here!</Link>
        {login ? <Link to='/pages'>Go to Profile</Link> : <Link to='/login'>Go to Profile</Link>}
    </>
  )
}

export default Home