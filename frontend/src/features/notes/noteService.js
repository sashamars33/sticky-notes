import axios from 'axios'

const API_URL = 'api/pages'

const createNote = async(noteData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.post(`${API_URL}/create-note`, noteData, config)
    return res.data
}

const getNotes = async(token, user, page) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    console.log(page)
    const res = await axios.get(`${API_URL}/${user}/${page}`, config)
    return res.data
}

const noteService = {
    createNote,
    getNotes
}

export default noteService