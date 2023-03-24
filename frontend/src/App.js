import { ThemeProvider } from '@mui/material'
import { darkTheme } from './themes/darkTheme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Board from './pages/Board'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navigation /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='/board' element={<PrivateRoute />}>
              <Route path='/board' element={<Board />} />
            </Route>
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
