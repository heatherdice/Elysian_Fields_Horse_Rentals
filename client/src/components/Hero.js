import React from "react";

export default function Hero({ image }) {
    return(
        <div style={{ backgroundImage: `url(${image})` }} className="heroImage">
            <h1 style={
                {marginLeft: "60px",
                marginTop: "0", 
                paddingTop: "50px", 
                marginBottom: "0", 
                fontSize: "3em"}
            }>
                Elysian Fields
            </h1>
            <h2 style={
                {marginLeft: "60px", 
                marginTop: "16px", 
                fontSize: "2em", 
                fontWeight: "normal",
                paddingBottom: "50px"}
            }>
                Horse Rentals
            </h2>
        </div>
    )
}