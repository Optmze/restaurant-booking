import './userReservation.css'; // Import the CSS file

import { useState } from 'react';
import ReservationForm from '../components/ReservationForm';

const UserReservations = () => {
  const [reservation, setReservation] = useState({
    name: '',
    timings: '',
    seats: 0,
  });

  const handleReservationChange = (field, value) => {
    setReservation((prevReservation) => ({
      ...prevReservation,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservation),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Reservation created successfully!');
        setReservation({
          name: '',
          timings: '',
          seats: 0,
        });
      } else {
        console.error('Error creating reservation:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="user-reservations">
      <h2>Create Reservation</h2>
      <ReservationForm
        reservation={reservation}
        onReservationChange={handleReservationChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default UserReservations;