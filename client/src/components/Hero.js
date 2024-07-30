import React from "react";
import heroImage from "../assets/heroImage.jpg";

export default function Hero() {
    return(
        <div style={{backgroundImage: `url(${heroImage})`}}>
            <h1 style={
                {marginLeft: "60px", 
                marginTop: "50px", 
                marginBottom: "0", 
                fontSize: "3em"}
            }>
                Elysian Fields
            </h1>
            <h2 style={
                {marginLeft: "60px", 
                marginTop: "16px", 
                fontSize: "2em", 
                fontWeight: "normal"}
            }>
                Horse Rentals
            </h2>
        </div>
    )
}