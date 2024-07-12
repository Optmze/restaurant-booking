import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModifyReservation from './ModifyReservation';
import './AdminReservations.css';

const AdminReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [modifyingReservation, setModifyingReservation] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('/api/workouts');
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };
    fetchReservations();
  }, []);

  const handleModify = (reservation) => {
    setModifyingReservation(reservation);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Admin Reservations</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Timings</th>
            <th scope="col">Seats</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.name}</td>
              <td>{reservation.timings}</td>
              <td>{reservation.seats}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleModify(reservation)}
                >
                  Modify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modifyingReservation && (
        <ModifyReservation
          reservation={modifyingReservation}
          onClose={() => setModifyingReservation(null)}
        />
      )}
    </div>
  );
};

export default AdminReservations;
