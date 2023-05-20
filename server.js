require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRouters = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRouters)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //  listen for requests
        app.listen(process.env.PORT, () => {
        console.log('Hello World!!!!', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
