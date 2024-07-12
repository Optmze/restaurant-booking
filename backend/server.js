require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/reservations')
const userRoutes = require('./routes/users');


//express app
const app = express()

//middleware
app.use(express.json())



app.get('/', (req,res) => {
    res.json({msg: 'Welcome to the app'})
})

//listen for requests


// routes:
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
     .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log("Listening on port 4000!")
        })
     })
     .catch((error) => {
        console.log(error)
     } )

// api end points -> get all the reservations
// post  -> create new reservation
// get /workouts/:id -> single workout document
// delete /workouts/:id -> deletes a single workout
// update /workouts/:id -> update a single workout