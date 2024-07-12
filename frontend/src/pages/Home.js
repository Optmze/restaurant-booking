import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      {/* Leftmost text (restaurant name) */}
      <h1>Swigatto</h1>

      {/* Center text (promotional message) */}
      <p>Reserve your seats here for a fine dining experience!</p>
    </div>
  );
};

export default Home;
