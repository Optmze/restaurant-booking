const Reservation = require('../models/reservationModel')
const mongoose = require('mongoose')


// get all reservations
const getReservations = async (req,res) => {
    const reservations = await Reservation.find({}).sort({createdAt: -1}) //descending order
    res.status(200).json(reservations)
}

// get single workout 
const getReservation  = async (req, res) =>{
    const {id} = req.params // this is the /api":id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such reservation"})
    }
    
    const reservation = await Reservation.findById(id)

    if(!reservation){
        return res.status(404).json({error: 'No such reservation'})
    }

    res.status(200).json(reservation)
 }

// create new workout
const createReservation = async (req,res) => {
    const {name,timings,seats} = req.body
    try{
        const reservation = await Reservation.create({name,timings,seats})
        res.status(200).json(reservation)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

// delete reservations
const deleteReservation  = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const reservation = await Reservation.findOneAndDelete({_id: id})
    
    if(!reservation){
        return res.status(400).json({error: 'No such error'})
    }

    res.status.json(reservation)
}

// update workout
const updateReservation  = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such reservation'})
    }

    const reservation = await Reservation.findOneAndUpdate({_id: id},{
    // we send data with the request so we use that for update
    ...req.body
    })

    if(!reservation){
        return res.status(400).json({error:"No such reservation"})
    }

    res.status(200).json(reservation)
}

module.exports = {
    getReservations,
    getReservation,
    createReservation,
    deleteReservation,
    updateReservation
}