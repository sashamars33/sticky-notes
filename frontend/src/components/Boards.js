import {useNavigate} from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Boards = () => {

    const navigate = useNavigate()

    const goToBoard = () => {
        navigate('/board')
    }

  return (
    <Box sx={{bgcolor: 'background.paper'}} style={{padding: '2%', margin: '2% 0'}}>
    <Grid container spacing={1}>
        <Grid item sx={8}>
            <Card sx={{bgcolor: 'background.default'}}>
                <Box>
                    <Button variant='outlined' onClick={goToBoard}>
                    <h2>Important Notes and Tasks</h2>
                    </Button>
                </Box>
            </Card>
        </Grid>
        <Grid item sx={4}>
            <Card sx={{bgcolor: 'background.default'}}>
                <Box>
                    <Button variant='outlined' onClick={goToBoard}>
                    <h2>Sticky Notes Tasks</h2>
                    </Button>
                </Box>
            </Card>
        </Grid>
        <Grid item sx={2}>
            <Card sx={{bgcolor: 'background.default'}}>
                <Box>
                    <Button variant='outlined' onClick={goToBoard}>
                    <h2>Todos doe getting the Job</h2>
                    </Button>
                </Box>
            </Card>
        </Grid>
    </Grid>
    </Box>
  )
}

export default Boards