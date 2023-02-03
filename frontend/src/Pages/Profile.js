import Boards from '../components/Boards'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import FormControl from '@mui/material/FormControl'

const Profile = () => {
  return (
    <>
    <CssBaseline />
    <Paper sx={{bgcolor: 'background.default'}} style={{padding: '2% 5%', height: '100vh'}} elevation={0} square>
        <Card>
            <CardContent>
                <h1>Add a new board!</h1>
                <p>To get started fill out the form below and then click on the board to add your sticky notes!</p>
                <FormControl style={{width: '100%'}}>
                    <TextField variant="filled" label="Add a new board." color="primary" style={{ margin: '2% 0'}} type="text" id="password" name="password"></TextField>
                    <Button variant="outlined">Submit</Button>
                </FormControl>
            </CardContent>
        </Card>
        <Boards />
    </Paper>
    </>
  )
}

export default Profile