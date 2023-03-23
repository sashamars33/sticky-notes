import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'


const Footer = () => {

    const {user} = useSelector((state) => state.auth)

  return (
    <Box sx={{bgcolor: 'background.default'}} style={{padding: '5%', display: 'flex', height: 'auto', alignItems: 'center'}}>
        <Box sx={{color: 'primary.main'}} style={{width: '33.33%'}}>
            <h4 style={{fontSize: '1.5rem'}}>Have a question?</h4>
            <p style={{margin: '3% 0'}}>Send us a message below!</p>
            <Button variant="outlined" style={{width: '100%'}} onClick={() => window.location = 'mailto:sashamarshalldesigns@gmail.com'}>Message</Button>
        </Box>
        <Box sx={{color: 'primary.main'}} style={{textAlign: 'right', width: '66.66%',  height: '100%', fontSize: '1.2rem'}}>
            <h5 style={{fontSize: '1.2rem'}}>Site Map</h5>
            {user ? <ul style={{listStyle: 'none', display: 'flex', flexFlow: 'column'}}>
                <Link to='/'><li>Home</li></Link>
                <Link to='/profile'><li>Profile</li></Link>
            </ul> : 
            <ul style={{listStyle: 'none', display: 'flex', flexFlow: 'column'}}>
                <Link to='/'><li>Home</li></Link>
                <Link to='/register'><li>Register</li></Link>
                <Link to='/login'><li>Login</li></Link>
            </ul>}
        </Box>
    </Box>
  )
}

export default Footer