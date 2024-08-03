import React from "react";
import { NavLink } from "react-router-dom";

export default function Hero({ image, homePage, title }) {
    return(
        <header style={{ backgroundImage: `url(${image})` }} className="hero-image">
            {homePage === true ? (
                <div className="hero-text-home">
                    <h1>
                        Elysian Fields
                    </h1>
                    <h2>
                        Horse Rentals
                    </h2>
                </div>
            ) : (
                <div className="hero-text">
                    <NavLink to="/" className="site-title">Elysian Fields</NavLink>
                    <p className="site-subtitle">
                        Horse Rentals
                    </p>
                    <h1>{title}</h1>
                </div>
            )}

        </header>
    )
}