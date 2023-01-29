import {Link} from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const Home = () => {
  return (
    <Paper sx={{bgcolor: 'background.default'}} style={{padding: '2% 10%', height: '100vh'}} elevation={0} square>
      <Card sx={{bgcolor: 'background.paper'}} style={{margin: '2% 0'}}>
            <CardContent>
                <h1 style={{textTransform: 'uppercase', padding: '0 0 2% 0'}}>Get your tasks and todos organized with Sticky Notes!</h1>
                <p>A website inspired by sticky squares of paper used to remind people of what they are doing, what they should do, or things they have done.</p>
                <p>Sticky notes allows you to create boards which you can add notes revelant to a particular topic. You can also rank these notes by importance so you never lose your most crucial ideas.</p>
            </CardContent>
      </Card>
      <ButtonGroup variant="outlined" color='secondary'>
        <Button>Login</Button>
        <Button>Register</Button>
        <Button>Learn</Button>
      </ButtonGroup>
      <Card sx={{bgcolor: 'background.paper'}} style={{margin: '2% 0'}}>
            <CardContent>
                <h2 style={{textTransform: 'uppercase', padding: '0 0 2% 0'}}>About Sticky Notes</h2>
                <p>Sticky notes is a web application built with React, Redux, Node, Express, and MUI components. </p>
            </CardContent>
      </Card>
    </Paper>
  )
}

export default Home