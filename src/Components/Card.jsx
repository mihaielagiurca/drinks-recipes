import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Card({ title, description, link }) {
  return (
    <div className="card" style={{ cursor: "pointer" }}>
    
    <div className="intro-cocktailPresentation">
      <Link to={link} className="card-link">
       
          <h3>{title}</h3>
          <p>{description}</p>
      
      </Link>
    </div>
     </div>
  );
}

export default Card