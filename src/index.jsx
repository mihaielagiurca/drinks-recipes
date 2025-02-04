import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import OldFashioneds from "./Components/OldFashioneds";
import Martinies from "./Components/Martinies";
import Margaritas from "./Components/Margaritas";

function App() {    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Cocktail Pages */}
                <Route path="/old-fashioned" element={<OldFashioneds />} />
                <Route path="/martini" element={<Martinies />} />
                <Route path="/margarita" element={<Margaritas />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
