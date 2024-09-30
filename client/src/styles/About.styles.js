import { styled } from "styled-components";
import { Link } from "react-router-dom";

const AboutPage = styled.main`
    overflow: hidden;
    width: 100%;
`;

const AboutSections = styled.section`
    display: grid;
    padding: 2em;
    h3 {
        font-size: 2.5em;
        font-weight: normal;
        place-self: center;
        margin: 0;
    }
    h4 {
        font-family: var(--title-font) !important;
        font-size: 2em;
        font-weight: normal;
        margin: 1em 0 0;
    }
    p {
        font-size: 1.5em;
    }
    @media (max-width: 900px) {
        column-gap: 1em;
        h4 {
            font-size: 1.5em;
        }
        p {
            font-size: 1em;
        }
    }
    @media (max-width: 450px) {
        row-gap: 1em;
        padding: 1em;
    }
`;

const AboutInfo = styled(AboutSections)`
    height: 70vh;
    color: var(--platinum);
    background-color: var(--hunter-green);
    grid-template-columns: 1fr 1fr;
`;

const AboutHorses = styled(AboutSections)`
    min-height: 75vh;
    color: var(--champagne-pink);
    background-color: var(--english-violet);
    grid-template-columns: 1fr 1fr;
    column-gap: 3em;
    justify-items: center;
    h3 {
        grid-column: span 2;
    }
    @media (max-width: 900px) {
        column-gap: 1em;
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        h3 {
            grid-column: span 1;
        }
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
        transform: scale(1.1);
    }
    @media (max-width: 600px) {
        margin-top: 1em;
    }
`;

const StyledImage = styled.img`
    height: auto;
    width: 100%
    max-width: 400px;
    object-fit: cover;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
    @media (max-width: 900px) {
        max-width: 250px;
    }
`;

const AffiliateLinks = styled(AboutSections)`
    height: 50vh;
    color: var(--hunter-green);
    background-color: var(--champagne-pink);
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3em;
    justify-items: center;
    align-items: center;
    h3 {
        grid-column: span 3;
        text-align: center;
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        height: 70%;
        h3 {
            grid-column: span 1;
        }
    }
`;

// may want to consider making these buttons?
const AffiliateLogos = styled.img`
    cursor: pointer;
    max-width: 150px;
    width: 100%;
    height: auto;
    object-fit: contain;
    &:hover {
        transform: scale(1.2);
    }
`;

export {
    AboutPage,
    AboutSections,
    AboutInfo,
    AboutHorses,
    StyledLink,
    StyledImage,
    AffiliateLinks,
    AffiliateLogos
}