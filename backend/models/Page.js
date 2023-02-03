const mongoose = require('mongoose')

const PageSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: [true, 'Please add a title for your board.']
    },
    selected: {
        type: Boolean,
        required: true,
        default: false,
    }
},
    { timestamps: true, }
)

module.exports = mongoose.model('Page', PageSchema)