const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3333
var cors = require('cors')
const app = express()

//Database Connection
connectDB()

console.log('connected')

app.use(cors())

console.log('cors')


app.use(express.json())
app.use(express.urlencoded({extended: false}))

console.log('json, express')


//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/pages', require('./routes/pageRoutes'))

console.log('routes')


//Set build as Static Folder
app.use(express.static(path.join(__dirname, '../frontend/build')))

console.log('static')


app.get('*', (req,res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))

console.log('file send')


//Error Handler
app.use(errorHandler)

console.log('error handling')
 

app.listen(PORT, () => {
    if(process.env.ENV === "dev"){
        console.log("Server is running.")
    }
})