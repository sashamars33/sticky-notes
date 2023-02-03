const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    page: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: [true, 'Please add a note.']
    },
    checked: {
        type: Boolean,
        required: true,
        default: false
    },
},
    { timestamps: true, }
)

module.exports = mongoose.model('Note', NoteSchema)