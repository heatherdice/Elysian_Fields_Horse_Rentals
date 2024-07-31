import React from "react";

export default function Hero({ image, title, subtitle }) {
    return(
        <div style={{ backgroundImage: `url(${image})` }} className="hero-image">
            <div className="hero-text">
                <h1 style={
                    {marginTop: "0", 
                    paddingTop: "50px", 
                    marginBottom: "0", 
                    fontSize: "3em"}
                }>
                    {title}
                </h1>
                <h2 style={
                    {marginTop: "16px", 
                    fontSize: "2em", 
                    fontWeight: "normal",
                    paddingBottom: "50px"}
                }>
                    {subtitle}
                </h2>
            </div>
        </div>
    )
}