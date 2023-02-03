import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ButtonGroup from '@mui/material/ButtonGroup'

const Navigation = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth)
  
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/')
    }
  
    return (
      <Box>
        <AppBar position='static' sx={{}} style={{padding: '0 5%'}}>
          <Toolbar style={{justifyContent: "space-between"}}>
            <Link to='/' style={{textDecoration: 'none', color: '#1c1c1c', textTransform: 'uppercase'}}>Sticky Notes</Link>
  
            {user ? (
            <Button variant="contained" color="info" onClick={onLogout}>Logout</Button>
            ) : (
              <ButtonGroup>
                <Button variant='outlined'><Link style={{textDecoration: 'none', color: '#1c1c1c'}} to='/login'>Login</Link></Button>
                <Button variant='outlined'><Link style={{textDecoration: 'none', color: '#1c1c1c'}} to='/register'>Register</Link></Button>
              </ButtonGroup>
              ) } 
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
  
  export default Navigation