import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import FormControl from '@mui/material/FormControl'
import Notes from '../components/Notes'

const Board = () => {

    const navigate = useNavigate()
    const [note, setNote] = useState({})

    const backToBoards = () => {
        navigate('/profile')
    }


    const onSubmit = () => {

    }

  return (
    <>
     <CssBaseline />
        <Paper sx={{bgcolor: 'background.default'}} style={{padding: '2% 5%', height: '100vh'}} elevation={0} square>
        <Card>
            <CardContent>
                <Button variant='outlined' onClick={backToBoards}>Back to Boards</Button>
                <FormControl style={{width: '100%'}}>
                    <TextField variant="filled" label="Add a new note." multiline color="primary" style={{ margin: '1.5% 0'}} type="text" id="password" name="password" onChange={(e) => setNote(e.target.value)}></TextField>
                    <Button variant="outlined" onClick={onSubmit}>Submit</Button>
                </FormControl>
            </CardContent>
        </Card>
        <Notes />
        </Paper>
    </>
  )
}

export default Board