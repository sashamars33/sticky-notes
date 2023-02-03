import { ThemeProvider } from '@mui/material'
import { darkTheme } from './themes/darkTheme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Board from './pages/Board'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navigation /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/board' element={<Board />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
