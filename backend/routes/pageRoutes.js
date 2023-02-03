const express = require('express')
const router = express.Router()
const profileControllers = require('../controllers/profileController')

 
router.get('/', profileControllers.getPages)
router.get('/notes', profileControllers.getNotes)
router.post('/create-page', profileControllers.createPage)
router.post('/create-note', profileControllers.createNote)
router.delete('/delete-page', profileControllers.deletePage)
router.delete('/delete-note', profileControllers.deleteNote)
router.put('/checked', profileControllers.checkedTask)
router.put('/selected', profileControllers.selectPage)
router.put('/deselect', profileControllers.deselectPage)

module.exports = router