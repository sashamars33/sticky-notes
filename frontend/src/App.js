import { ThemeProvider } from '@mui/material'
import { lightTheme } from './themes/lightTheme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navigation /> 

      </Router>
    </ThemeProvider>
  );
}

export default App;
