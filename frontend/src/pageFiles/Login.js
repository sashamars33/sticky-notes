import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {login, reset} from '../features/auth/authSlice'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import FormControl from '@mui/material/FormControl'


const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, isError, isSuccess, message} = useSelector(state => state.auth)

    useEffect(() => {
        if(isError){
            alert(message)
        }

        if(isSuccess || user){
            navigate('/profile')
        }

        dispatch(reset()) 
        
    }, [isError, isSuccess, user, message, dispatch, navigate])


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }




  return (
    <>
    <CssBaseline />
    <Paper style={{height: '100vh', textAlign: 'center', padding: '8% 12%'}}>
        <Card sx={{bgcolor: "background.default"}}>
       <CardContent >
            <h1>Login</h1>
            <p>Enter your account email and password to login.</p>
       </CardContent>

       <CardContent style={{width: '75%', margin: 'auto'}}>
            <FormControl style={{width: '80%'}}>
                <TextField variant="filled" label="Email" color="primary" style={{ margin: "2% 0"}} required type="text"  id="email" name="email" value={email} onChange={onChange}>
                </TextField>
                <TextField variant="filled" label="Password" color="primary" style={{ margin: "2% 0"}}required type="password"  id="password" name="password" value={password} onChange={onChange}>
                </TextField>
                    <Button variant='outlined' onClick={onSubmit} style={{margin: '2% 0', padding: '2%'}}>Submit</Button>
            </FormControl>
       </CardContent>
       </Card>
    </Paper>
    </>
  )
}

export default Login