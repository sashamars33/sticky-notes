import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import CssBaseline from '@mui/material/CssBaseline'


const Home = () => {

  const {user} = useSelector((state) => state.auth)


  return (
<>
<CssBaseline />
    <Paper sx={{bgcolor: 'background.default'}} style={{padding: '2% 5%'}} elevation={0} square id='home'>
      <Card sx={{bgcolor: 'background.paper'}} style={{margin: '2% 0'}}>
            <CardContent >
                <h1 style={{textTransform: 'uppercase', padding: '0 0 2% 0', fontSize: '3rem'}}>Get your tasks and todos organized with Sticky Notes!</h1>
                <p style={{fontSize: '1.4rem'}}> A website inspired by sticky squares of paper used to remind people of what they are doing, what they should do, or things they have done.</p>
                <p style={{fontSize: '1.4rem'}}>Sticky notes allows you to create boards which you can add notes revelant to a particular topic. You can also rank these notes by importance so you never lose your most crucial ideas.</p>
            </CardContent>
      </Card>
      {user ?
        <ButtonGroup variant="contained" color='primary'>
          <Button sx={{color: 'background.default'}} style={{fontSize: '1.2rem'}}><Link to='/profile'>Go to Profile</Link></Button>
        </ButtonGroup>
      : <ButtonGroup variant="outlined" color='secondary'>
          <Link to='/login'><Button style={{fontSize: '1.2rem'}}>Login</Button></Link>
          <Link to='/register'><Button style={{fontSize: '1.2rem'}}>Register</Button></Link>
      </ButtonGroup>}
      <Card sx={{bgcolor: 'background.paper'}} style={{margin: '2% 0'}}>
            <CardContent id='#about'>
                <h2 style={{textTransform: 'uppercase', padding: '0 0 2% 0', fontSize: '2rem'}}>About Sticky Notes</h2>
                <p style={{fontSize: '1.4rem'}}>Sticky Notes is a web application designed to help you replace your expensive sticky note habit. Sticky Notes allows you to create boards of ideas where you can keep small notes related to that idea, Helping you stay organzied without the squares of paper.</p>
                <p style={{fontSize: '1.4rem'}}>This application was build by Sasha Marshall using MERN stack. For more information about the application or the developer please visit: <a style={{color: 'white'}} href='https://sashamarshall.dev/'>here.</a></p>
            </CardContent>
      </Card>
    </Paper>
  </>
  )
}

export default Home