import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"

function Martinies() {
    const [martinies, setMartinies] = useState([]);
    
    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini")
            .then(result => result.json())
            .then((data) => {
                 
                setMartinies(data.drinks || [] ); 
            })
            .catch((error) => console.error("Error fetching data:", error)); 
    }, []); 
  
    const martini =  martinies.map(cocktail => (
                <div className="cocktail-card" key={cocktail.idDrink}>
                    <h3>{cocktail.strDrink}</h3>
                    
                    <img 
                        className="cocktail-image"
                        src={cocktail.strDrinkThumb}
                        alt={cocktail.strDrink}
                    />
                    <p>{cocktail.strInstructions}</p>
                </div>
  ))

     return (
       <>
        <NavBar />
        <div className="cocktail-display">
            {martinies.length > 0 ? (
              <div className="cocktail-container">
                 <div className="cocktail-flex"> 
                    {martini}
                 </div> 
              </div>
            ) : (
                <p>Loading drinks...</p> // Show a message if drinks are not loaded yet
            )}      
        </div>
    
    </>
    )}
    export default Martinies;