import React from "react";
import { styled } from "styled-components";

const HeroContainer = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    background-position: 50% 25%;
    background-size: cover;
    background-repeat: no repeat;
    @media (max-width: 900px) {
        height: 40vh;
    }
`;

const PageTitle = styled.div`
    align-self: center;
    font-size: 2.5em;
    font-weight: lighter;
    margin-top: 4em;
    @media (max-width: 900px) {
        font-size: 2em;
    }
    @media (max-width: 600px) {
        font-size: 1.5em;
    }
`;

export default function Hero({ image, homePage, title }) {
    return(
        <HeroContainer style={{ backgroundImage: `url(${image})` }}>
            {!homePage ? (
                <PageTitle className="hero-text-home">
                    <h1>{title}</h1>
                </PageTitle>
            ) : null}
        </HeroContainer>
    )
}