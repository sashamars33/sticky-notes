import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getPages, reset} from '../features/pages/pageSlice'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Boards = () => {

    const {pages, isLoading, isSuccess} = useSelector((state) => state.page)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        return () => {
            if(isSuccess){
                dispatch(reset())
            }
        }
    },[dispatch, isSuccess])

    useEffect(() => {
        dispatch(getPages())
    }, [dispatch])

    const goToBoard = () => {
        navigate('/board')
    }

    if(isLoading){
        return (
            <h2>Loading...</h2>
        )
    }

  return (
    <Box sx={{bgcolor: 'background.paper'}} style={{padding: '2%', margin: '2% 0'}}>
    <Grid container spacing={1}>
    </Grid>
    </Box>
  )
}

export default Boards