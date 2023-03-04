import {useNavigate} from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Notes = ({notes}) => {
  return (
    <>
    {notes.map(note => (
                <Grid item xs={12} md={4} lg={3} key={note._id}>
                  <Card sx={{bgcolor: 'text.hint', color: 'background.default'}}>
                    <CardContent style={{margin: '2%', cursor: 'pointer'}}>
                      <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                        {note.checked ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon />}
                        <HighlightOffIcon/>
                      </Box>
                      <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                      <h3 style={{padding: '2% 0'}}>{note.note}</h3>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
        {/* <Grid container spacing={2} style={{padding: '2% 0'}}>
            <Grid item xs={4}>
                <Card sx={{bgcolor: 'primary.main', color: 'background.paper'}}>
                    <CardContent>
                    <Box>

                    </Box>
                    
                    <h3>Note 1</h3>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{bgcolor: 'primary.main', color: 'background.paper'}}>
                    <CardContent>
                    <h3>Note 1</h3>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{bgcolor: 'primary.main', color: 'background.paper'}}>
                    <CardContent>
                    <h3>Note 1</h3>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{bgcolor: 'primary.main', color: 'background.paper'}}>
                    <CardContent>
                    <h3>Note 1</h3>
                    </CardContent>
                </Card>
            </Grid>
        </Grid> */}
    </>
  )
}

export default Notes