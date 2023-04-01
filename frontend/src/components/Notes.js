import {useState, useEffect} from 'react'
import {checkNote, deleteNotes} from '../features/notes/noteSlice'
import {useDispatch} from 'react-redux'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import {MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'
import {MdOutlineCheckBox} from 'react-icons/md'
import {TiDelete} from 'react-icons/ti'



const Notes = ({notes}) => {

    const dispatch = useDispatch()
    const [note, setNote] = useState('')
    const [deleteNote, setDeleteNote] = useState('')

    useEffect(() => {
        if(note.length > 0){
            dispatch(checkNote(note))
            setNote('')
            window.location.reload(false)
        }
        if(deleteNote.length > 0){
            console.log(deleteNote)
            dispatch(deleteNotes(deleteNote))
            setDeleteNote('')
            window.location.reload(false)
        }
    }, [dispatch, note, setNote, setDeleteNote, deleteNote])



    if(!notes || notes.message){
        return (
            <h3 style={{width: '100%', textAlign: 'center'}}>No Notes Yet!</h3>
        )
    };


  return (
    <Grid container spacing={1}>
    {notes.map(note => (
                <Grid item xs={6} md={3} lg={2} key={note._id}>
                  <Card sx={{bgcolor: 'text.hint', color: 'background.default'}}>
                    <CardContent style={{margin: '2%', cursor: 'pointer'}}>
                      <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                        {note.checked ? <MdOutlineCheckBox onClick={() => setNote(note._id)}/> : <MdOutlineCheckBoxOutlineBlank onClick={() => setNote(note._id)} />}
                        <TiDelete onClick={() => setDeleteNote(note._id)}/>
                      </Box>
                      <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                      <p style={{padding: '2% 0', fontSize: '1.25rem'}}>{note.note}</p>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
    </Grid>
  )
}

export default Notes