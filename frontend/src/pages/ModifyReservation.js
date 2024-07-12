import React, { useState } from 'react';
import axios from 'axios';

const ModifyReservation = ({ reservation, onClose }) => {
  const [updatedReservation, setUpdatedReservation] = useState({
    name: reservation.name,
    restaurant: reservation.restaurant,
    seats: reservation.seats,
  });

  const handleUpdate = async () => {
    try {
      console.log(reservation._id)
      await axios.patch(`/api/workouts/${reservation._id}`, updatedReservation);
      console.log(updatedReservation);
      onClose();
    } catch (error) {
      console.error('Error updating reservation:', error);
    }
  };

  return (
    <div>
      <h2>Modify Reservation</h2>
      <label>
        Name:
        <input
          type="text"
          value={updatedReservation.name}
          onChange={(e) =>
            setUpdatedReservation({ ...updatedReservation, name: e.target.value })
          }
        />
      </label>
      <label>
        Timings
        <input
          type="text"
          value={updatedReservation.timings}
          onChange={(e) =>
            setUpdatedReservation({ ...updatedReservation, restaurant: e.target.value })
          }
        />
      </label>
      <label>
        Seats:
        <input
          type="number"
          value={updatedReservation.seats}
          onChange={(e) =>
            setUpdatedReservation({ ...updatedReservation, seats: e.target.value })
          }
        />
      </label>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default ModifyReservation;