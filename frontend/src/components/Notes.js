import {useNavigate} from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Notes = () => {
  return (
    <>
        <Grid container spacing={2} style={{padding: '2% 0'}}>
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
            <Grid item xs={4}>
                <Card sx={{bgcolor: 'primary.main', color: 'background.paper'}}>
                    <CardContent>
                    <h3>Note 1</h3>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </>
  )
}

export default Notes