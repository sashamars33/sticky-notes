import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import pageService from './pageService'

const currUser = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: currUser ? currUser : null,
    pages: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const pages = createAsyncThunk('page/boards', 
    async (user, thunkAPI) => {
        try{
            return await pageService.getPages(user)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    
} )

export const createPage = createAsyncThunk('page/create', 
     async (user, thunkAPI) => {
        try{
            return await pageService.createPage(user) 
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
} )



export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(pages.pending, (state) => {
            state.isLoading = true
        })
        .addCase(pages.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(pages.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.user = null
            state.message = action.payload
        })
        .addCase(createPage.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createPage.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(createPage.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.user = null
            state.message = action.payload
        }) 
    }
})

export const {reset} = pageSlice.actions
export default pageSlice.reducer