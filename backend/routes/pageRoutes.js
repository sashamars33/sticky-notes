const express = require('express')
const router = express.Router()
const profileControllers = require('../controllers/profileController')
const { protect } = require('../middleware/authMiddleware')

 
router.get('/:id', profileControllers.getPages)
router.get('/:id_user/:id_page', profileControllers.getNotes)
router.post('/create-page', profileControllers.createPage)
router.post('/create-note', profileControllers.createNote)
router.delete('/delete-page', profileControllers.deletePage)
router.delete('/delete-note', profileControllers.deleteNote)
router.put('/checked', profileControllers.checkedTask)
router.put('/:id/select', profileControllers.selectPage)
router.put('/:id/deselect', profileControllers.deselectPage)

module.exports = router