import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"

function Margaritas() {
    const [margaritas, setMargaritas] = useState([]);
    
    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
            .then(result => result.json())
            .then((data) => {
                 
                setMargaritas(data.drinks || [] ); 
            })
            .catch((error) => console.error("Error fetching data:", error)); 
    }, []); 
  
    const margarita =  margaritas.map(cocktail => (
                <div className="cocktail-card" key={cocktail.idDrink}>
                    <h3 className="cocktail-name"> {cocktail.strDrink}</h3>
                    
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
         {margaritas.length > 0 ? (
           <div className="cocktail-container">
              <div className="cocktail-flex"> 
                 {margarita}
              </div> 
           </div>
         ) : (
             <p>Loading drinks...</p> // Show a message if drinks are not loaded yet
         )}      
     </div>
 
 </>
 )}
export default Margaritas