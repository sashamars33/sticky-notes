const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const Page = require('../models/Page')
const Note = require('../models/Note')
const mongoose = require('mongoose')

const getPages = asyncHandler( async (req, res) => {

    const user = await User.findById(req.params.id)

    if(!user){
        res.status(401)
        throw new Error('User not found.')
    }

    const pages = await Page.find({user: user})

    res.status(200).json(pages)
})

const getNotes = asyncHandler( async(res, req) => {
    console.log(req.params )

    const user = await User.findById(req.params.iduser)

    const page = await Page.findById(req.params.idpage)

    const notes = await Note.find({page: page})



    if(page.user.toString() !== user){
        res.status(401)
        throw new Error('Not authorized.')
    }

    res.status(200).json(notes)
})

const createPage = asyncHandler( async (req,res) => {
    const topic = req.body.page
    const user = req.body.user

    if(!topic){
        res.status(400)
        throw new Error('Please add a board title.')
    }


    if(!user){
        res.status(401)
        throw new Error('User not found.')
    }

    const page = await Page.create({
        user,
        topic
    })

    res.status(201).json(page)
})

const createNote = asyncHandler( async(req, res) => {

    console.log(req.body)

    const user = req.body.user
    const page = req.body.page
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
    const page = mongoose.Types.ObjectId(req.params.id)

    await Page.findByIdAndUpdate(
        {_id: page},
        {selected: true})

    const selected = await Page.find({_id: page})
    res.status(200).json(selected[0])
})

const deselectPage = asyncHandler( async(req, res) => {
    const user = req.params.id
    await Page.updateMany({user},
        {selected: false})
    res.status(200).json({})
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