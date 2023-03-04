import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import noteService from './noteService'

const initialState = {
    pages: [],
    page: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createNote = createAsyncThunk('pages/create', 
    async (noteData, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await noteService.createNote(noteData, token)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    
})

export const getNotes = createAsyncThunk('pages/getPages', 
    async (_, thunkAPI) => {
        try{
            const user = thunkAPI.getState().auth.user._id
            const page = thunkAPI.getState().pages.page._id
            const token = thunkAPI.getState().auth.user.token
            return await noteService.getNotes(token, user)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    
})



export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        resetNotes: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createNote.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createNote.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createNote.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getNotes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getNotes.fulfilled, (state, action ) => {
                state.isLoading = false
                state.isSuccess = true
                state.pages = action.payload
            })
            .addCase(getNotes.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { resetNotes } = noteSlice.actions
export default noteSlice.reducer