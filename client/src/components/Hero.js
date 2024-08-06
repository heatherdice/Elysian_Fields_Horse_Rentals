import React from "react";

export default function Hero({ image, homePage, title }) {
    return(
        <header style={{ backgroundImage: `url(${image})` }} className="Hero">
            {!homePage ? (
                <div className="hero-text">
                    <h1>{title}</h1>
                </div>
            ) : null}
        </header>
    )
}