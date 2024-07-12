const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reservationSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    timings:{
        type: String,
        required: true
    },
    seats:{
        type:Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Reservation',reservationSchema)

