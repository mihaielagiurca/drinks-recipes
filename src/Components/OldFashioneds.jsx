import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"

function OldFashioneds() {
    const [oldFashioned, setOldFashioned] = useState([]);
    
    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=old")
            .then(result => result.json())
            .then((data) => {
                 
                setOldFashioned(data.drinks || [] ); 
            })
            .catch((error) => console.error("Error fetching data:", error)); 
    }, []); 
  
    const oldfashion=  oldFashioned.map(cocktail => (
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
            {oldFashioned.length > 0 ? (
              <div className="cocktail-container">
                 <div className="cocktail-flex"> 
                    {oldfashion}
                 </div> 
              </div>
            ) : (
                <p>Loading drinks...</p> // Show a message if drinks are not loaded yet
            )}      
        </div>
    
    </>
    )}
    export default OldFashioneds;