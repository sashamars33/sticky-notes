const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const Page = require('../models/Page')
const Note = require('../models/Note')

const getPages = asyncHandler( async (req, res) => {
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found.')
    }

    const pages = await Page.find({user: req.user.id})

    res.status(200).json(pages)
})

const getNotes = asyncHandler( async(res,req) => {
    const user = await User.findById(req.user.id)

    const page = await Page.findById(req.body.page._id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    const notes = await Note.find({user: user, page: page})

    res.status(200).json(notes)
})

const createPage = asyncHandler( async (req,res) => {
    const topic = req.body.topic

    if(!topic){
        res.status(400)
        throw new Error('Please add a board title.')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found.')
    }

    const page = await Page.create({
        user: req.user.id,
        topic
    })

    res.status(201).json(page)
})

const createNote = asyncHandler( async(req, res) => {
    const user = req.user.id

    const page = req.body.page._id
    const note = req.body.note

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