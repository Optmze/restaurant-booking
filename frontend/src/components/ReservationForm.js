
import React from 'react';
import './reservationForm.css';

const ReservationForm = ({ reservation, onReservationChange, onSubmit }) => {
    return (
      <form onSubmit={onSubmit} className="mb-3">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={reservation.name}
            onChange={(e) => onReservationChange('name', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="timings">Timings:</label>
          <input
            type="text"
            className="form-control"
            id="timings"
            value={reservation.timings}
            onChange={(e) => onReservationChange('timings', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="seats">Seats:</label>
          <input
            type="number"
            className="form-control"
            id="seats"
            value={reservation.seats}
            onChange={(e) => onReservationChange('seats', e.target.value)}
          />
        </div>
        <div className="text-center">
        <div style={{ position: "absolute", left: "300px", top: "350px" }}>
        <button type="submit" className="btn btn-primary" >
          Create Reservation
        </button>
        </div>
        </div>
      </form>
    );
  };
  
  export default ReservationForm;
  