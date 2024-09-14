import React from "react";
import { styled } from "styled-components";

const HeroContainer = styled.header`
    width: 100%;
    height: 70vh;
    background-position: 50% 25%;
    background-size: cover;
    background-repeat: no repeat;
    @media (max-width: 900px) {
        height: 40vh;
    }
`;

export default function Hero({ image, homePage, title }) {
    return(
        <HeroContainer style={{ backgroundImage: `url(${image})` }} className="Hero">
            {!homePage ? (
                <div className="hero-text">
                    <h1>{title}</h1>
                </div>
            ) : null}
        </HeroContainer>
    )
}