import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import pageService from './pageService'

const initialState = {
    pages: [],
    page: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createPage = createAsyncThunk('pages/create', 
    async (pageData, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await pageService.createPage(pageData, token)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    
})

export const getPages = createAsyncThunk('pages/getPages', 
    async (_, thunkAPI) => {
        try{
            const user = thunkAPI.getState().auth.user._id
            const token = thunkAPI.getState().auth.user.token
            return await pageService.getPages(token, user)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    
})



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
            .addCase(createPage.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createPage.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createPage.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getPages.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPages.fulfilled, (state, action ) => {
                state.isLoading = false
                state.isSuccess = true
                state.pages = action.payload
            })
            .addCase(getPages.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = pageSlice.actions
export default pageSlice.reducer