import React from "react";
import { styled } from "styled-components";

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
    const HeroImage = styled.img`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 70vh;
        background-image: url(${image});
        opacity: ${!homePage ? "0.5" : "1"};
        background-position: 50% 25%;
        background-size: cover;
        background-repeat: no repeat;
        @media (max-width: 900px) {
            height: 40vh;
        }
    `;

    return(
        <header>
            <HeroImage />
            {!homePage ? (
                <PageTitle>
                    <h1>{title}</h1>
                </PageTitle>
            ) : null}
        </header>
    )
}