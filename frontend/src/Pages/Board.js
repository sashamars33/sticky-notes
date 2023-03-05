import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {createNote, getNotes, reset} from '../features/notes/noteSlice'
import {toast} from 'react-toastify'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import FormControl from '@mui/material/FormControl'
import Notes from '../components/Notes'
import CircularProgress from '@mui/material/CircularProgress'


const Board = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const { notes, isLoading, isError, isSuccess, message} = useSelector(state => state.notes)
    const {page} = useSelector((state) => state.pages)
    const [note, setNote] = useState({})


    const backToBoards = () => {
        navigate('/profile')
    }

    useEffect(() => {
        if(isError){
          toast.error(message)
        }
    
        if(isSuccess){
          dispatch(reset())
          navigate('/board')
        }
    
        dispatch(reset())
      }, [ isError, message, dispatch, isSuccess, navigate ])


    const onSubmit = (e) => {

        e.preventDefault()
        if(note === ''){
            toast.error('Please enter a note.')
        }else{
            const noteData = {
                note,
                page: page._id,
                user: user._id
            }
            dispatch(createNote(noteData))
            window.location.reload(false);
        }
    }

    useEffect(() => {
        if(page){
            dispatch(getNotes())
        }
    }, [dispatch, page])


    if(isLoading || !page){
        return(
          <Paper sx={{bgcolor: 'background.default'}} style={{padding: '2% 5%', height: '100vh'}} elevation={0} square>
            <Card style={{display: 'flex', padding: '10%', background: '#00000000'}}>
              <CircularProgress style={{margin: 'auto'}}/>
            </Card>
          </Paper>
        )
      }


  return (
    <>
     <CssBaseline />
        <Paper sx={{bgcolor: 'background.default'}} style={{padding: '2% 5%', height: '100vh'}} elevation={0} square>
        <Card>
            <CardContent>
                <Button variant='outlined' onClick={backToBoards}>Back to Boards</Button>
                <h2 style={{width: '100%', textAlign: 'center'}}>{page.topic}</h2>
                <FormControl style={{width: '100%'}}>
                    <TextField variant="filled" label="Add a new note." multiline color="primary" style={{ margin: '1.5% 0'}} type="text" id="password" name="password" onChange={(e) => setNote(e.target.value)}></TextField>
                    <Button variant="outlined" onClick={onSubmit}>Submit</Button>
                </FormControl>
            </CardContent>
        </Card>
        <Notes notes = {notes}/>
        </Paper>
    </>
  )
}

export default Board