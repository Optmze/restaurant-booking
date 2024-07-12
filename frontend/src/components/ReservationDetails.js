const ReservationDetails = ({ reservation }) => {
    return (
      <div className="card my-3">
        <div className="card-body">
          <h4 className="card-title">{reservation.name}</h4>
          <p className="card-text">
            <strong>Timings: </strong>
            {reservation.timings}
          </p>
          <p className="card-text">
            <strong>Seats: </strong>
            {reservation.seats}
          </p>
          <p className="card-text">
            <strong>Reservation Booked at: </strong>
            {reservation.createdAt}
          </p>
        </div>
      </div>
    );
  };
  
  export default ReservationDetails;
  