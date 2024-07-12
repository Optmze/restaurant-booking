const express = require("express")
const {createReservation,getReservation,getReservations,deleteReservation,updateReservation} = require('../controllers/reservationController')

const router = express.Router()

router.get('/', getReservations)
router.get('/:id', getReservation)
router.post('/', createReservation)
router.delete('/:id', deleteReservation)
router.patch ('/:id',updateReservation)

module.exports = router