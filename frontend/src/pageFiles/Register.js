import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {register, reset} from '../features/auth/authSlice'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import FormControl from '@mui/material/FormControl'

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, isError, isSuccess, message} = useSelector(state => state.auth)

    useEffect(() => {
        if(isError){
            alert(message)
        }

        if(isSuccess || user){
            navigate('/profile')
            console.log(user)
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

        if(password !== password2){
            alert('Passwords do not match.')
        }else{
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData))
        }
    }


  return (
    <>
    <CssBaseline />
    <Paper style={{height: '100vh', textAlign: 'center', padding: '8% 12%'}}>
        <Card sx={{bgcolor: "background.default"}}>
       <CardContent>
            <h1>Register</h1>
            <p>Fill out the form below to create an account.</p>
       </CardContent>

       <CardContent >
            <FormControl style={{width: '85%'}}>
                <TextField variant="filled" label="Name" color="primary" style={{margin: '2% 0'}} required type="text" id="name" name="name" value={name} onChange={onChange}>
                </TextField>
                <TextField variant="filled" label="Email" color="primary" style={{ margin: '2% 0'}} required type="text" id="email" name="email" value={email} onChange={onChange}>
                </TextField>
                <TextField variant="filled" label="Password" color="primary" style={{ margin: '2% 0'}} required type="password" id="password" name="password" value={password} onChange={onChange}>
                </TextField>
                <TextField variant="filled" label="Confirm Password" color="primary" style={{ margin: '2% 0'}} required type="password" id="password2" name="password2" value={password2} onChange={onChange}>
                </TextField>
                    <Button variant='outlined ' onClick={onSubmit} style={{margin: '2% 0', padding: '2%'}}>Submit</Button>
            </FormControl>
       </CardContent>
       </Card>
    </Paper>
    </>
  )
}

export default Register
