const asyncHandler = require('express-async-handler')
const Page = require('../models/Page')
const Note = require('../models/Note')

const getPages = asyncHandler( async (req, res) => {
    const user = req.body.user
    const pages = await Page.find({user})

    res.status(200).json(pages)
})

const getNotes = asyncHandler( async(res,req) => {
    const {user, page} = req.body
    const notes = await Note.find({user: user, page: page})

    res.status(200).json(notes)
})

const createPage = asyncHandler( async (req,res) => {
    const {user, topic} = req.body
    const page = await Page.create({
        user,
        topic
    })

    res.status(200).json(page)
})

const createNote = asyncHandler( async(req, res) => {
    const {user, page, note} = req.body
    const newNote = await Note.create({
        user,
        page,
        note
    })

    res.status(200).json(newNote)
})

const deletePage = asyncHandler( async(req, res) => {
    const page = req.body.page
    await Note.deleteMany({page})
    await Page.deleteOne({page})

    
})

const deleteNote = asyncHandler( async(req, res) => {
    const note = req.body.note
    await Note.deleteOne({note})
})

const checkedTask = asyncHandler( async(req, res) => {
    const {note, checked} = req.body
    await Note.findOneAndUpdate(
        {_id: note},
        {checked: !checked}
    )
})

const selectPage = asyncHandler( async(req, res) => {
    const page = req.body.page
    await Page.findOneAndUpdate(
        {page},
        {selected: true})
})

const deselectPage = asyncHandler( async(req, res) => {
    const user = req.body.user
    await Page.updateMany({user},
        {selected: false})
})

module.exports = {
    getPages,
    getNotes,
    createPage,
    createNote,
    deletePage,
    deleteNote,
    checkedTask,
    selectPage,
    deselectPage
}