import React from "react";
import { styled } from "styled-components";

const HeroContainer = styled.header`
    position: relative;
    width: 100%;
    height: 70vh;
    @media (max-width: 900px) {
        height: 40vh;
    }
`;

const PageTitle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    font-size: 2.5em;
    font-weight: lighter;
    @media (max-width: 900px) {
        font-size: 2em;
    }
    @media (max-width: 660px) {
        font-size: 1em;
    }
`;

export default function Hero({ image, homePage, title }) {
    const HeroImage = styled.img`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-image: url(${image});
        opacity: ${!homePage ? "0.5" : "1"};
        background-position: 50% 25%;
        background-size: cover;
        background-repeat: no repeat;
    `;

    return(
        <HeroContainer>
            <HeroImage />
            {!homePage ? (
                <PageTitle>
                    <h1>{title}</h1>
                </PageTitle>
            ) : null}
        </HeroContainer>
    )
}