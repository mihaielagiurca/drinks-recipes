import React from "react"
import Card from "./Card"
import '../index.css';

function Home(){
    return (
        <>
        <div className="intro-container">  
            <div className="text-content"> 
                <h1>Drink Recipes: A Journey Through Flavor</h1>
                <h3>Welcome to the world of drink recipes, where creativity meets taste, and every sip tells a story.
                From classic cocktails to innovative mocktails, this presentation will guide you through a diverse landscape of 
                delicious beverages, exploring history, trends, and techniques along the way.</h3>
            </div>
            <div className="intro-image">
                <img src="/images/cocktail.jpg" alt="drink"></img>
            </div>    
       
        </div>
        <div className="intro-cocktailPresentation">
            <h1>Cocktail Classics: Timeless Recipes and Variations</h1>
            <div className="card-container">
           
            <Card
                title="The Old Fashioned" 
                description="A timeless classic, the Old Fashioned is a simple yet elegant cocktail made with whiskey, 
                sugar, bitters, and orange peel. Variations include using different types of whiskey, liqueurs, or garnishes.." 
                link="/old-fashioned"
            />
            <Card 
                title="The Martini" 
                description="The Martini, a sophisticated and iconic cocktail, combines gin or vodka with dry vermouth. Its versatility allows for various variations, 
                such as the Dirty Martini, which adds olive brine, or the Gibson, which features a cocktail onion."
                link="/martini"
            />
            <Card 
                title="The Margarita" 
                description="The Margarita, a refreshing and popular cocktail, is a blend of tequila, 
                lime juice, and orange liqueur. Variations include using different types of tequila, sweeteners, or garnishes." 
                link="/margarita"
            />
            </div>
           
        </div>'
</>
    )
}
export default Home;