import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Agar styling ka issue ho toh

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Movie Collection</h1>
      
      <Link to="/add-movie">
        <button className="add-movie-btn">Add Movie</button>
      </Link>

      
      <div className="movies-list">
      </div>
    </div>
  );
};

export default Dashboard;
